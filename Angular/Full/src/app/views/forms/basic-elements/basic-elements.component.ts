import {colorVariants} from '@/app/constants';
import {splitArray, toTitleCase} from '@/app/utils/string-utils';
import {Component} from '@angular/core';
import {PageTitleComponent} from "@app/components/page-title.component";
import {UiCardComponent} from "@app/components/ui-card.component";
import {NgIcon} from '@ng-icons/core';
import {LucideAngularModule, LucideSearch, Percent} from 'lucide-angular';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-basic-elements',
    imports: [PageTitleComponent, UiCardComponent, NgIcon, LucideAngularModule,NgbDropdownModule],
    templateUrl: './basic-elements.component.html',
    styles: ``
})
export class BasicElementsComponent {
    Percent = Percent

    showPassword: boolean = false;

    togglePassword(): void {
        this.showPassword = !this.showPassword;
    }

    get checkboxColumns() {
        return splitArray(colorVariants, Math.ceil(colorVariants.length / 2));
    }

    protected readonly LucideSearch = LucideSearch;
    protected readonly toTitleCase = toTitleCase;
}
