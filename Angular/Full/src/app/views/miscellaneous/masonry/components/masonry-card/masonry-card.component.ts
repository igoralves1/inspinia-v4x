import {Component, Input} from '@angular/core';
import type {MasonryCardType} from '../../types';
import {RouterLink} from '@angular/router';
import {NgIcon} from '@ng-icons/core';

@Component({
    selector: 'app-masonry-card',
    imports: [RouterLink,NgIcon],
    templateUrl: './masonry-card.component.html',
    styles: ``
})
export class MasonryCardComponent {
    @Input() item!: MasonryCardType
}
