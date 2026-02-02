import { Directive, AfterViewInit, OnDestroy } from '@angular/core';
import GLightbox from 'glightbox';

@Directive({
    selector: '[appGlightboxInit]',
    standalone: true
})
export class GlightboxInitDirective implements AfterViewInit, OnDestroy {
    private instance: any;

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.instance = GLightbox({
                selector: '.glightbox',
                openEffect: 'fade',
                closeEffect: 'fade'
            });
        }, 100);
    }

    ngOnDestroy(): void {
        if (this.instance) {
            this.instance.destroy();
        }
    }
}
