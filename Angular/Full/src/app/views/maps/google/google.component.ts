import { Component } from '@angular/core';
import { PageTitleComponent } from "../../../components/page-title.component";

type mapItemType = {
    title: string,
    description: string,
    url: string,
}

@Component({
    selector: 'app-google',
    imports: [PageTitleComponent],
    templateUrl: './google.component.html',
    styles: ``
})
export class GoogleComponent {

    private apiKey = 'AIzaSyBSFRN6WWGYwmFi498qXXsD2UwkbmD74v4';
    maps = [
        {
            title: 'Basic Google Map',
            description: 'Displays a basic embedded Google Map.',
            url: `https://www.google.com/maps/embed/v1/place?q=Eiffel+Tower&key=${this.apiKey}`,
        },
        {
            title: 'Street View Google Map',
            description: 'Displays a satellite-styled view of the map.',
            url: `https://www.google.com/maps/embed/v1/place?q=Statue+of+Liberty&key=${this.apiKey}&zoom=18&maptype=satellite`,
        },
        {
            title: 'Dark Google Map',
            description: 'A dark-mode styled map using CSS filters.',
            url: `https://www.google.com/maps/embed/v1/place?q=Sydney+Opera+House&key=${this.apiKey}`,
            style: 'filter: invert(100%) hue-rotate(180deg);'
        }
    ]
}
