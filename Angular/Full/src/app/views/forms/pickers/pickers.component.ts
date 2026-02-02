import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {PageTitleComponent} from "@app/components/page-title.component";
import {NgIcon} from '@ng-icons/core';
import {FlatpickrDirective, provideFlatpickrDefaults} from 'angularx-flatpickr';
import {ColorChromeModule} from 'ngx-color/chrome';
import {ColorSketchModule} from 'ngx-color/sketch';
import {ColorSliderModule} from 'ngx-color/slider';
import {ColorTwitterModule} from 'ngx-color/twitter';
import {NgxDaterangepickerBootstrapDirective} from "ngx-daterangepicker-bootstrap";
import dayjs from 'dayjs';

@Component({
    selector: 'app-pickers',
    imports: [PageTitleComponent, NgIcon, FlatpickrDirective, FormsModule, ColorSketchModule, ColorChromeModule, ColorSliderModule, ColorTwitterModule, NgxDaterangepickerBootstrapDirective],
    providers: [provideFlatpickrDefaults()],
    templateUrl: './pickers.component.html',
    styles: ``
})
export class PickersComponent {
    date = dayjs().startOf('day')
    date2 = dayjs().startOf('day')
    date3 = dayjs().startOf('day')

    basicDate = '20 Jun, 2025';
    disableDate = '20 Jun, 2025';
    multipleDate = '20 Jun, 2025';
    dateTime = '"20 Jun, 2025 14:25';
    humanFriendlyDate = 'Jun 20, 2025';

    color = '#2889e9';
    selectedRangeCalendarTimeRight = dayjs().startOf('day');
    localeTime = {
        firstDay: 1,
        startDate: dayjs().startOf('day'),
        endDate: dayjs().endOf('day'),
        format: 'DD.MM.YYYY HH:mm:ss',
        applyLabel: 'Apply',
        cancelLabel: 'Cancel',
        fromLabel: 'From',
        toLabel: 'To',
    };

    ranges: any = {
        Today: [dayjs().startOf('day'), dayjs().endOf('day')],
        Yesterday: [
            dayjs().startOf('day').subtract(1, 'day'),
            dayjs().endOf('day').subtract(1, 'day'),
        ],
        'Last 7 days': [
            dayjs().startOf('day').subtract(6, 'days'),
            dayjs().endOf('day'),
        ],
        'Last 30 days': [
            dayjs().startOf('day').subtract(29, 'days'),
            dayjs().endOf('day'),
        ],
        'This month': [dayjs().startOf('month'), dayjs().endOf('month')],
        'Last month': [
            dayjs().startOf('month').subtract(1, 'month'),
            dayjs().endOf('month').subtract(1, 'month'),
        ],
    };

    onColorChange($event: any) {
        console.log('Selected Color:', $event);
        this.color = $event.color;
    }
}
