import { Component } from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {ProductInformationFormComponent} from '@/app/views/ecommerce/products/add/components/product-information-form.component';
import {ProductImageComponent} from '@/app/views/ecommerce/products/add/components/product-image.component';
import {ProductPricingFormComponent} from '@/app/views/ecommerce/products/add/components/product-pricing-form.component';
import {ProductOrganizeFormComponent} from '@/app/views/ecommerce/products/add/components/product-organize-form.component';
import {LucideAngularModule, LucideClipboardX, LucidePlus, LucideSave} from 'lucide-angular';

@Component({
  selector: 'app-add',
    imports: [
        PageTitleComponent,
        ProductInformationFormComponent,
        ProductImageComponent,
        ProductPricingFormComponent,
        ProductOrganizeFormComponent,
        LucideAngularModule
    ],
  templateUrl: './add.component.html',
  styles: ``
})
export class AddComponent {

    protected readonly LucideClipboardX = LucideClipboardX;
    protected readonly LucideSave = LucideSave;
    protected readonly LucidePlus = LucidePlus;
}
