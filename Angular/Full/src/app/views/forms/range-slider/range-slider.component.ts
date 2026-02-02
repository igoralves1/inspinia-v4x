import {Component} from '@angular/core';
import {PageTitleComponent} from "@app/components/page-title.component";
import {NgIcon} from '@ng-icons/core';
import {NouisliderModule} from 'ng2-nouislider'
import {FormsModule} from '@angular/forms';

@Component({
    selector: 'app-range-slider',
    imports: [PageTitleComponent, NgIcon, NouisliderModule, FormsModule],
    templateUrl: './range-slider.component.html',
    styles: ``
})
export class RangeSliderComponent {
    range = 50
    sizeRange = 50
    sizeRange2 = 50
    lineRange1 = 50
    lineRange2 = 180
    lineRange3 = 90
    colorSliderRange1 = 240
    colorSliderRange2 = 185
    colorSliderRange3 = 90
    colorSliderRange4 = 125
    multiRange = [20, 80]
    linearRange = [500, 4000]
    tooltipSliderRange = [20, 75]
    softLimitsSlider = 50
    verticalSliderRange = [40,60]
    verticalSliderRange2 = 60
    verticalSliderRange3 = 60

    softSliderConfig = {
        pips: {
            mode: 'values',
            values: [20, 80],
            density: 4
        }
    }

    verticalSliderConfig = {
        start: [40, 60],
        connect: true,
        orientation: "vertical",
        range: { min: 0, max: 100 }
    }


    val1 = 20;
    val2 = 80;
    locked = false;
    private offset = this.val2 - this.val1;
    private updating = false;

    toggleLock(): void {
        this.locked = !this.locked;
        if (this.locked) {
            this.offset = this.val2 - this.val1;
        }
    }

    onChange1(newValue: number): void {
        const v = +newValue;
        if (this.locked && !this.updating) {
            this.updating = true;
            this.val1 = v;
            this.val2 = this.validate(v + this.offset);
            this.updating = false;
        } else {
            this.val1 = v;
        }
    }

    onChange2(newValue: number): void {
        const v = +newValue;
        if (this.locked && !this.updating) {
            this.updating = true;
            this.val2 = v;
            this.val1 = this.validate(v - this.offset);
            this.updating = false;
        } else {
            this.val2 = v;
        }
    }

    private validate(val: number): number {
        return Math.min(100, Math.max(0, val));
    }


}
