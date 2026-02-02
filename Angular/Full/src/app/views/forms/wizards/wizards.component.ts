import {Component} from '@angular/core';
import {PageTitleComponent} from "@app/components/page-title.component";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BasicWizardComponent} from '@/app/views/forms/wizards/components/basic-wizard.component';
import {WizardWithProgressbarComponent} from '@/app/views/forms/wizards/components/wizard-with-progressbar.component';
import {VerticalWizardComponent} from '@/app/views/forms/wizards/components/vertical-wizard.component';


@Component({
    selector: 'app-wizard',
    imports: [PageTitleComponent, FormsModule, ReactiveFormsModule, BasicWizardComponent, WizardWithProgressbarComponent, VerticalWizardComponent],
    templateUrl: './wizards.component.html',
    styles: ``
})
export class WizardsComponent {





}
