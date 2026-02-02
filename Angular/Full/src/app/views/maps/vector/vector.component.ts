import { getColor } from '@/app/utils/color-utils';
import { Component } from '@angular/core';
import { PageTitleComponent } from "@app/components/page-title.component";
import { VectorMapComponent } from "@app/components/vector-map.component";

import 'jsvectormap/dist/maps/world-merc.js';
import 'jsvectormap/dist/maps/world.js';
import 'jsvectormap/dist/maps/us-aea-en.js';
import 'jsvectormap/dist/maps/canada.js'
import 'jsvectormap/dist/maps/russia.js'
import 'jsvectormap/dist/maps/iraq.js'
import 'jsvectormap/dist/maps/spain.js'
import '@/assets/js/in-mill-en.js';

@Component({
    selector: 'app-vector',
    imports: [VectorMapComponent, PageTitleComponent],
    templateUrl: './vector.component.html',
    styles: ``
})
export class VectorComponent {
    worldMapConfig = {
        map: 'world',
        zoomOnScroll: false,
        zoomButtons: true,
        markersSelectable: true,
        markers: [
            { name: "Greenland", coords: [72, -42] },
            { name: "Canada", coords: [56.1304, -106.3468] },
            { name: "Brazil", coords: [-14.2350, -51.9253] },
            { name: "Egypt", coords: [26.8206, 30.8025] },
            { name: "Russia", coords: [61, 105] },
            { name: "China", coords: [35.8617, 104.1954] },
            { name: "United States", coords: [37.0902, -95.7129] },
            { name: "Norway", coords: [60.472024, 8.468946] },
            { name: "Ukraine", coords: [48.379433, 31.16558] },
        ],
        markerStyle: {
            initial: { fill: getColor("primary") },
            selected: { fill: getColor("primary") }
        },
        regionStyle: {
            initial: {
                stroke: "#aab9d14d",
                strokeWidth: 0.25,
                fill: '#aab9d14d',
                fillOpacity: 1,
            },
        },
        labels: {
            markers: {
                render: (marker: any) => marker.name
            }
        }
    }

    worldMapLineConfig = {
        map: "world_merc",
        zoomOnScroll: false,
        zoomButtons: false,
        markers: [
            {
                name: "Greenland",
                coords: [72, -42]
            },
            {
                name: "Canada",
                coords: [56.1304, -106.3468]
            },
            {
                name: "Brazil",
                coords: [-14.2350, -51.9253]
            },
            {
                name: "Egypt",
                coords: [26.8206, 30.8025]
            },
            {
                name: "Russia",
                coords: [61, 105]
            },
            {
                name: "China",
                coords: [35.8617, 104.1954]
            },
            {
                name: "United States",
                coords: [37.0902, -95.7129]
            },
            {
                name: "Norway",
                coords: [60.472024, 8.468946]
            },
            {
                name: "Ukraine",
                coords: [48.379433, 31.16558]
            },
        ],
        lines: [{
            from: "Canada",
            to: "Egypt"
        },
        {
            from: "Russia",
            to: "Egypt"
        },
        {
            from: "Greenland",
            to: "Egypt"
        },
        {
            from: "Brazil",
            to: "Egypt"
        },
        {
            from: "United States",
            to: "Egypt"
        },
        {
            from: "China",
            to: "Egypt"
        },
        {
            from: "Norway",
            to: "Egypt"
        },
        {
            from: "Ukraine",
            to: "Egypt"
        },
        ],
        regionStyle: {
            initial: {
                stroke: "#aab9d14d",
                strokeWidth: 0.25,
                fill: '#aab9d14d',
                fillOpacity: 1,
            },
        },
        markerStyle: {
            initial: { fill: getColor("secondary") },
            selected: { fill: getColor("secondary") }
        },
        lineStyle: {
            animation: true,
            strokeDasharray: "6 3 6",
        },
    }

    usaMapConfig = {
        map: 'us_aea_en',
        regionStyle: {
            initial: {
                fill: getColor("primary"),
            },
        },
    }

    indiaMapConfig = {
        map: 'in_mill',
        backgroundColor: 'transparent',
        regionStyle: {
            initial: {
                fill: '#aab9d14d'
            },
            selected: {
                fill: getColor("secondary")
            }
        },
        selectedRegions: ['IN-GJ']
    }
    canadaMapConfig = {
        map: 'canada',
        zoomOnScroll: false,
        regionStyle: {
            initial: {
                fill: getColor("primary")
            }
        }
    }

    russiaMapConfig = {
        map: 'russia',
        zoomOnScroll: false,
        regionStyle: {
            initial: {
                fill: '#aab9d14d'
            }
        }
    }

    iraqMapConfig = {
        map: 'iraq',
        zoomOnScroll: false,
        regionStyle: {
            initial: {
                fill: getColor("primary")
            }
        }
    }

    spainMapConfig = {
        map: 'spain',
        zoomOnScroll: false,
        regionStyle: {
            initial: {
                fill: '#aab9d14d'
            }
        }
    }
}
