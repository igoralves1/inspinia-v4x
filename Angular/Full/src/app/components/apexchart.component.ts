import {Component, inject, Input, OnDestroy, OnInit} from '@angular/core';
import {ApexOptions, NgApexchartsModule} from 'ng-apexcharts';
import {LayoutStoreService} from '@core/services/layout-store.service';
import {Subscription} from 'rxjs';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'app-apexchart',
    imports: [
        NgApexchartsModule, CommonModule
    ],
    template: `
        <apx-chart
            [chart]="options.chart"
            [annotations]="options.annotations"
            [colors]="options.colors"
            [dataLabels]="options.dataLabels"
            [series]="options.series"
            [stroke]="options.stroke"
            [labels]="options.labels"
            [legend]="options.legend"
            [fill]="options.fill"
            [tooltip]="options.tooltip"
            [plotOptions]="options.plotOptions"
            [responsive]="options.responsive"
            [xaxis]="options.xaxis"
            [yaxis]="options.yaxis"
            [grid]="options.grid"
            [states]="options.states"
            [title]="options.title"
            [subtitle]="options.subtitle"
            [theme]="options.theme"
            [markers]="options.markers"
        />`
})
export class ApexchartComponent implements OnInit, OnDestroy {
    @Input() getOptions!: () => ApexOptions

    options: ReturnType<any>

    layout = inject(LayoutStoreService);

    private layoutSub!: Subscription;

    ngOnInit(): void {
        this.options = this.getOptions();

        // refresh chart on theme and skin change
        this.layoutSub = this.layout.layoutState$.subscribe(state => {
            const skin = state.skin;
            const theme = state.theme;
            this.options = this.getOptions();
        });
    }

    ngOnDestroy(): void {
        this.layoutSub?.unsubscribe();
    }
}
