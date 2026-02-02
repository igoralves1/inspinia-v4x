import { Component } from '@angular/core';
import { UiCardComponent } from "../../../components/ui-card.component";
import {PageTitleComponent} from '@app/components/page-title.component';

@Component({
  selector: 'app-images',
    imports: [UiCardComponent, PageTitleComponent],
  templateUrl: './images.component.html',
  styles: ``
})
export class ImagesComponent {

}
