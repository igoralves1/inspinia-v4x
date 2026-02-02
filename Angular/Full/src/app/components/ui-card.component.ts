import {Component, Input} from '@angular/core';
import {NgIcon} from '@ng-icons/core';
import {NgbCollapse} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-ui-card',
    imports: [ NgIcon, NgbCollapse],
    template: `
        @if (isVisible) {
            <div class="card {{isCollapsed ? 'card-collapse' : ''}} {{className}}">
                <div class="card-header justify-content-between align-items-center" [class]="isCollapsed ?'border-0':''">
                    <h5 class="card-title">{{ title }}
                        <ng-content select="[badge-text]"></ng-content>
                    </h5>
                    <div>
                        @if (isTogglable || isReloadable || isCloseable) {
                            <div class="card-action">
                                @if (isTogglable) {
                                    <button (click)="isCollapsed = !isCollapsed"
                                            class="card-action-item border-0">
                                        @if (!isCollapsed) {
                                            <ng-icon name="tablerChevronUp"/>
                                        }
                                        @if (isCollapsed) {
                                            <ng-icon name="tablerChevronDown"/>
                                        }
                                    </button>
                                }
                                @if (isReloadable) {
                                    <button (click)="reload()" class="card-action-item border-0">
                                        <ng-icon name="tablerRefresh"/>
                                    </button>
                                }
                                @if (isCloseable) {
                                    <button (click)="close()" class="card-action-item border-0">
                                        <ng-icon name="tablerX"/>
                                    </button>
                                }
                            </div>
                        }
                        <ng-content select="[helper-text]"></ng-content>
                    </div>
                </div>

                <div class="card-body {{bodyClass}}" #collapse="ngbCollapse" [(ngbCollapse)]="isCollapsed">
                    <ng-content select="[card-body]"></ng-content>
                </div>

                @if (isReloading) {
                <div class="card-overlay d-flex">
                    <div class="spinner-border text-primary"></div>
                </div>
                }

            </div>
        }
    `
})
export class UiCardComponent {
    @Input() title!: string
    @Input() isTogglable?: boolean
    @Input() isReloadable?: boolean
    @Input() isCloseable?: boolean
    @Input() bodyClass?: string
    @Input() className?: string

    isCollapsed = false
    isReloading = false;
    isVisible = true;

    reload() {
        this.isReloading = true;
        setTimeout(() => (this.isReloading = false), 1500); // fake reload
    }

    close() {
        this.isVisible = false;
    }
}
