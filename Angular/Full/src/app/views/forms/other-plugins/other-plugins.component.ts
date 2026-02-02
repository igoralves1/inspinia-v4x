import {Component, ViewChild} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {UiCardComponent} from '@app/components/ui-card.component';
import {NgxMaskDirective, provideNgxMask} from 'ngx-mask'
import {NgIcon} from '@ng-icons/core';
import {CounterDirective} from '@core/directive/counter.directive';
import {NgbTypeahead, NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {distinctUntilChanged, merge, Observable, OperatorFunction, Subject} from 'rxjs';
import {debounceTime, filter, map} from 'rxjs/operators';
import {states, statesWithFlags} from '@/app/views/forms/other-plugins/data';

@Component({
    selector: 'app-other-plugins',
    imports: [
        PageTitleComponent,
        UiCardComponent,
        NgxMaskDirective,
        NgIcon,
        CounterDirective,
        NgbTypeaheadModule,
        FormsModule,
    ],
    providers: [provideNgxMask()],
    templateUrl: './other-plugins.component.html',
    styles: ``
})
export class OtherPluginsComponent {
    colors = ["primary", "secondary", "success", "danger", "warning", "info", "purple", "soft-primary"]
    count: number = 0
    sizeCount: number = 0
    sizeCount2: number = 0
    colorCount: number = 100
    count5: number = 100
    count6: number = 100
    count7: number = 0


    basicTypeahead: any;
    focusTypeahead: any;
    formattedTypeahead: any;
    exactSearchTypeahead: any;
    customTypeahead: any;

    search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
        text$.pipe(
            debounceTime(200),
            distinctUntilChanged(),
            map((term) =>
                term.length < 2 ? [] : states.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
            ),
        );

    @ViewChild('instance', {static: true}) instance!: NgbTypeahead;

    focus$ = new Subject<string>();
    click$ = new Subject<string>();

    searchFocusTypeahead: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) => {
        const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
        const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
        const inputFocus$ = this.focus$;

        return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
            map((term) =>
                (term === '' ? states : states.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10),
            ),
        );
    };

    formatter = (result: string) => result.toUpperCase();

    formatterSearch: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
        text$.pipe(
            debounceTime(200),
            distinctUntilChanged(),
            map((term) =>
                term === '' ? [] : states.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
            ),
        );

    searchExact: OperatorFunction<string, readonly string []> = (text$: Observable<string>) =>
        text$.pipe(
            debounceTime(200),
            map((term) =>
                term === '' ? [] : states.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
            ),
        );

    exactFormatter = (x: string) => x;

    searchWithFlags: OperatorFunction<string, readonly {
        name: string;
        flag: string
    }[]> = (text$: Observable<string>) =>
        text$.pipe(
            debounceTime(200),
            map((term) =>
                term === ''
                    ? []
                    : statesWithFlags.filter((v) => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
            ),
        );

    nameFormatter = (x: { name: string }) => x.name;
}
