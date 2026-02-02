import { Component } from '@angular/core';
import { UiCardComponent } from '@app/components/ui-card.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIcon } from "@ng-icons/core";
import {PageTitleComponent} from '@app/components/page-title.component';
import {LucideAngularModule, LucideMinusCircle, LucidePlusCircle} from 'lucide-angular';
@Component({
    selector: 'app-accordions',
    imports: [UiCardComponent, NgbAccordionModule, NgIcon, PageTitleComponent, LucideAngularModule],
    templateUrl: './accordions.component.html',
    styles: ``,
})
export class AccordionsComponent {
    accordionItems = [
        {
            title: 'Accordion Item #1',
            description: ` <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.`
        },
        {
            title: 'Accordion Item #2',
            description: `<strong>This is the second item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.`
        },
        {
            title: 'Accordion Item #3',
            description: `<strong>This is the third item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.`
        }
    ];
    protected readonly LucidePlusCircle = LucidePlusCircle;
    protected readonly LucideMinusCircle = LucideMinusCircle;
}
