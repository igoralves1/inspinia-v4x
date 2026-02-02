import { Component, ViewChild, type AfterViewInit, type ElementRef, type OnDestroy } from '@angular/core';
import { PageTitleComponent } from "@app/components/page-title.component";
import { UiCardComponent } from "@app/components/ui-card.component";
import * as Diff from 'diff';
@Component({
    selector: 'app-text-diff',
    imports: [PageTitleComponent, UiCardComponent],
    templateUrl: './text-diff.component.html',
    styles: ``
})
export class TextDiffComponent implements AfterViewInit {
    @ViewChild('original') originalInput!: ElementRef<HTMLTextAreaElement>;
    @ViewChild('changed') changedInput!: ElementRef<HTMLTextAreaElement>;
    @ViewChild('output') diffOutput!: ElementRef<HTMLDivElement>;

    ngAfterViewInit(): void {
        this.render();
    }

    render(): void {
        const originalText = this.originalInput.nativeElement.value;
        const changedText = this.changedInput.nativeElement.value;
        const diff = Diff.diffWords(originalText, changedText);

        const fragment = document.createDocumentFragment();
        diff.forEach(part => {
            const el = document.createElement(
                part.added ? 'ins' : part.removed ? 'del' : 'span'
            );
            el.textContent = part.value;
            fragment.appendChild(el);
        });

        this.diffOutput.nativeElement.innerHTML = '';
        this.diffOutput.nativeElement.appendChild(fragment);
    }
}
