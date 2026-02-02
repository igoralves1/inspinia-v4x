import { Directive, Input, Output, EventEmitter } from '@angular/core';

@Directive({
    selector: '[appCounter]',
    exportAs: 'appCounter'
})
export class CounterDirective {
    @Input() count: number = 0;
    @Input() min: number = 0;
    @Input() max: number = 999999;

    @Output() countChange = new EventEmitter<number>();

    increment() {
        if (this.count < this.max) {
            this.count++;
            this.countChange.emit(this.count);
        }
    }

    decrement() {
        if (this.count > this.min) {
            this.count--;
            this.countChange.emit(this.count);
        }
    }

    setValue(val: number) {
        if (!isNaN(val)) {
            this.count = Math.min(this.max, Math.max(this.min, val));
            this.countChange.emit(this.count);
        }
    }
}
