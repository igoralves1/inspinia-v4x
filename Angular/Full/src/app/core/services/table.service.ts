import {DecimalPipe} from '@angular/common'
import {inject, Injectable} from '@angular/core'
import type {SortDirection} from '@core/directive/sortable.directive'
import {BehaviorSubject, Observable, of, Subject} from 'rxjs'
import {debounceTime, delay, switchMap, tap} from 'rxjs/operators'

interface SearchResult<T> {
    items: T[]
    total: number
}

interface State<T> {
    page: number
    startIndex: number
    endIndex: number
    pageSize: number
    searchTerm: string
    sortColumn: keyof T | ''
    sortDirection: SortDirection
}

function matches<T>(items: any, term: string, searchFields: (keyof T)[]) {
    if (!term) return true
    term = term.toLowerCase()

    for (const field of searchFields) {
        const value = (items[field] as unknown as string)?.toString().toLowerCase()
        if (value?.includes(term)) {
            return true
        }
    }
    return false
}

function compare<T>(v1: T, v2: T): number {
    return v1 < v2 ? -1 : v1 > v2 ? 1 : 0
}

@Injectable()
export class TableService<T extends {}> {
    private _loading$ = new BehaviorSubject<boolean>(true)
    private _search$ = new Subject<void>()
    private _items$ = new BehaviorSubject<T[]>([])
    private _total$ = new BehaviorSubject<number>(0)

    items: T[] = []
    private _state: State<T> = {
        page: 1,
        pageSize: 10,
        searchTerm: '',
        startIndex: 1,
        endIndex: 10,
        sortColumn: '',
        sortDirection: '',
    }

    public pipe = inject(DecimalPipe)

    constructor() {
        this._search$
            .pipe(
                tap(() => this._loading$.next(true)),
                debounceTime(200),
                switchMap(() => this._search()),
                delay(0),
                tap(() => this._loading$.next(false))
            )
            .subscribe((result) => {
                this._items$.next(result.items)
                this._total$.next(result.total)
            })

        this._search$.next()
    }

    get items$(): Observable<T[]> {
        return this._items$.asObservable()
    }

    get total$(): Observable<number> {
        return this._total$.asObservable()
    }

    get loading$(): Observable<boolean> {
        return this._loading$.asObservable()
    }

    get page(): number {
        return this._state.page
    }

    get startIndex(): number {
        return this._state.startIndex
    }

    get endIndex(): number {
        return this._state.endIndex
    }

    get pageSize(): number {
        return this._state.pageSize
    }

    get searchTerm(): string {
        return this._state.searchTerm
    }

    get sortColumn(): keyof T | '' {
        return this._state.sortColumn
    }

    get sortDirection(): SortDirection {
        return this._state.sortDirection
    }

    set page(page: number) {
        this._set({page})
    }

    set startIndex(startIndex: number) {
        this._set({startIndex})
    }

    set endIndex(endIndex: number) {
        this._set({endIndex})
    }

    set pageSize(pageSize: number) {
        this._set({pageSize})
    }

    set searchTerm(searchTerm: string) {
        this._set({searchTerm})
    }

    set sortColumn(sortColumn: keyof T | '') {
        this._set({sortColumn})
    }

    set sortDirection(sortDirection: SortDirection) {
        this._set({sortDirection})
    }

    setItems(items: T[], pageSize: number): void {
        this.items = items
        this._set({pageSize})
        this._set({endIndex: pageSize})
    }

    private _set(patch: Partial<State<T>>): void {
        Object.assign(this._state, patch)
        this._search$.next()
    }

    private _filters: { [key: string]: string | string[] } = {};

    /** Set or update a filter for a column */
    setFilter(column: keyof T, value: string) {
        if (value === 'All' || value === '') {
            delete this._filters[column as string];
        } else {
            this._filters[column as string] = value;
        }
        this._search$.next();
    }

    /** Optionally: reset all filters */
    resetFilters() {
        this._filters = {};
        this._search$.next();
    }




    private _search(): Observable<SearchResult<T>> {
        const {pageSize, page, searchTerm, sortColumn, sortDirection} =
            this._state
        const searchableFields = this.items.length > 0
            ? (Object.keys(this.items[0]) as (keyof T)[])
            : [];

        let filteredItems = this.items;

        // Apply search filter
        if (searchTerm) {
            filteredItems = filteredItems.filter((item) => matches(item, searchTerm, searchableFields));
        }

        // Apply generic column filters
        Object.keys(this._filters).forEach(key => {
            filteredItems = filteredItems.filter(item => {
                const val = (item as any)[key];
                const filterValue = this._filters[key];
                return (val != null && val.toString().toLowerCase() === filterValue.toString().toLowerCase());
            });
        })

        // Sort
        if (sortColumn) {
            filteredItems = [...filteredItems].sort((a, b) => {
                const res = compare(a[sortColumn], b[sortColumn])
                return sortDirection === 'asc' ? res : -res
            })
        }

        const total = filteredItems.length

        // Paginate the items
        this.startIndex = (page - 1) * pageSize
        this.endIndex = this.startIndex + pageSize
        const paginatedItems = filteredItems.slice(this.startIndex, this.endIndex)
        this._loading$.next(false)
        return of({items: paginatedItems, total})
    }


    deleteItem(item: T): void {
        this.items = this.items.filter(i => i !== item)
        if ((this.page - 1) * this.pageSize >= this.items.length && this.page > 1) {
            this.page = this.page - 1
        }
        this._search$.next()
    }



    setSort(column: keyof T | '', direction: SortDirection) {
        this.sortColumn = column;
        this.sortDirection = direction;
    }

    get showingRange(): string {
        const total = this._total$.getValue();
        const start = this.startIndex + 1;
        const end = Math.min(this.endIndex, total);
        return `Showing ${start} to ${end} of ${total}`;
    }


    /** Select or deselect all items (for current filtered list or full list) */
    setAllSelection(selected: boolean): void {
        this.items.forEach((item: any) => item.selected = selected);
        this._search$.next();
    }

    /** Toggle selection for a single item */
    toggleItemSelection(item: T): void {
        (item as any).selected = !(item as any).selected;
        this._search$.next();
    }

    /** Returns all selected items (from full dataset) */
    getSelectedItems(): T[] {
        return this.items.filter((item: any) => item.selected);
    }

    /** Returns true if at least one item is selected */
    hasSelectedItems(): boolean {
        return this.getSelectedItems().length > 0;
    }

    /** Delete all selected items */
    deleteSelectedItems(): void {
        this.items = this.items.filter((item: any) => !item.selected);
        if ((this.page - 1) * this.pageSize >= this.items.length && this.page > 1) {
            this.page = this.page - 1;
        }
        this._search$.next();
    }


}
