import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {NgbNav, NgbNavModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {NgIcon} from '@ng-icons/core';
import {SimplebarAngularModule} from 'simplebar-angular';

@Component({
    selector: 'app-outlook-nav',
    imports: [
        NgIcon,
        NgbNavModule,
        SimplebarAngularModule,
        NgbTooltipModule
    ],
    templateUrl: './outlook-nav.component.html',
    styles: ``
})
export class OutlookNavComponent {
    @Input() activeId = 1;
    @Output() activeIdChange = new EventEmitter<number>();
    @ViewChild('nav', {static: true}) nav!: NgbNav;

    onNavChange(newId: number) {
        this.activeId = newId;
        this.activeIdChange.emit(newId);
    }
}
