import { Routes } from '@angular/router';
import { BasicElementsComponent } from './basic-elements/basic-elements.component';
import { PickersComponent } from './pickers/pickers.component';
import { SelectsComponent } from './selects/selects.component';
import { ValidationComponent } from './validation/validation.component';
import { WizardsComponent } from './wizards/wizards.component';
import { TextEditorsComponent } from './text-editors/text-editors.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { FileUploadsComponent } from './file-uploads/file-uploads.component';
import { OtherPluginsComponent } from './other-plugins/other-plugins.component';

export const FORMS_ROUTES: Routes = [
    {
        path: 'forms/basic-elements',
        component: BasicElementsComponent,
        data: { title: "Basic Elements" },
    },
    {
        path: 'forms/pickers',
        component: PickersComponent,
        data: { title: "Form Pickers" },
    },
    {
        path: 'forms/select',
        component: SelectsComponent,
        data: { title: "Form Select" },
    },
    {
        path: 'forms/validation',
        component: ValidationComponent,
        data: { title: "Form Validation" },
    },
    {
        path: 'forms/wizard',
        component: WizardsComponent,
        data: { title: "Form Wizard" },
    },
    {
        path: 'forms/text-editors',
        component: TextEditorsComponent,
        data: { title: "Text Editors" },
    },
    {
        path: 'forms/range-slider',
        component: RangeSliderComponent,
        data: { title: "Range Slider" },
    },
    {
        path: 'forms/layouts',
        component: LayoutsComponent,
        data: { title: "Forms Layout" },
    },
    {
        path: 'forms/file-uploads',
        component: FileUploadsComponent,
        data: { title: "File Uploads" },
    },
    {
        path: 'forms/other-plugins',
        component: OtherPluginsComponent,
        data: { title: "Other Plugins" },
    },
];
