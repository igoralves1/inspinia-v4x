import {Component} from '@angular/core';
import {PageTitleComponent} from "../../../components/page-title.component";
import {LaddaModule} from 'angular2-ladda';

@Component({
    selector: 'app-loading-buttons',
    imports: [PageTitleComponent, LaddaModule],
    templateUrl: './loading-buttons.component.html',
    styles: ``,
})
export class LoadingButtonsComponent {
    isLoading: { [key: string]: boolean } = {};

    buttonList = [
        { title: 'Expand Left', buttonStyle: 'expand-left', color: 'primary' },
        { title: 'Expand Right', buttonStyle: 'expand-right', color: 'primary' },
        { title: 'Expand Up', buttonStyle: 'expand-up', color: 'primary' },
        { title: 'Expand Down', buttonStyle: 'expand-down', color: 'primary' },
        { title: 'Contract', buttonStyle: 'contract', color: 'warning' },
        { title: 'Zoom In', buttonStyle: 'zoom-in', color: 'warning' },
        { title: 'Zoom Out', buttonStyle: 'zoom-out', color: 'warning' },
        { title: 'Slide Left', buttonStyle: 'slide-left', color: 'info' },
        { title: 'Slide Right', buttonStyle: 'slide-right', color: 'info' },
        { title: 'Slide Up', buttonStyle: 'slide-up', color: 'info' },
        { title: 'Slide Down', buttonStyle: 'slide-down', color: 'info' },
    ];

    runLadda(style: string) {
        this.isLoading[style] = true;
        setTimeout(() => {
            this.isLoading[style] = false;
        }, 1500);
    }

}
