import { statesData } from '@/assets/data/Leaflet';
import { Component } from '@angular/core';
import { PageTitleComponent } from "@app/components/page-title.component";
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { circle, geoJSON, icon, latLng, layerGroup, marker, polygon, tileLayer, type Icon, type Map, type MapOptions } from 'leaflet';
@Component({
    selector: 'app-leaflet',
    imports: [PageTitleComponent, LeafletModule],
    templateUrl: './leaflet.component.html',
    styles: ``
})
export class LeafletComponent {
    iconConfig(color: string): Icon {
        return icon({
            iconUrl: `assets/images/leaflet/leaf-${color}.png`,
            shadowUrl: 'assets/images/leaflet/leaf-shadow.png',
            iconSize: [38, 95],
            shadowSize: [50, 64],
            iconAnchor: [22, 94],
            shadowAnchor: [4, 62],
            popupAnchor: [-3, -76],
        });
    }

    getColor(d: number): string {
        return d > 1000 ? '#800026' :
            d > 500 ? '#BD0026' :
                d > 200 ? '#E31A1C' :
                    d > 100 ? '#FC4E2A' :
                        d > 50 ? '#FD8D3C' :
                            d > 20 ? '#FEB24C' :
                                d > 10 ? '#FED976' : '#FFEDA0';
    }

    customIcon = icon({
        iconUrl: 'assets/images/leaflet/marker-icon.png',
        shadowUrl: 'assets/images/leaflet/marker-shadow.png',
    });

    cities = layerGroup([
        marker([39.61, -105.02], { icon: this.customIcon }).bindPopup('This is Littleton, CO.'),
        marker([39.74, -104.99], { icon: this.customIcon }).bindPopup('This is Denver, CO.'),
        marker([39.73, -104.8], { icon: this.customIcon }).bindPopup('This is Aurora, CO.'),
        marker([39.77, -105.23], { icon: this.customIcon }).bindPopup('This is Golden, CO.'),
    ]);

    basicMapOptions: MapOptions = {
        layers: [tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>', maxZoom: 18, })],
        center: latLng(42.35, -71.08),
        zoom: 10,
    }

    shapeMapOptions: MapOptions = {
        center: latLng(51.5, -0.09),
        zoom: 12,
        layers: [
            tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>', maxZoom: 18, }),

            marker([51.5, -0.09], {
                icon: icon({
                    iconUrl: 'assets/images/leaflet/marker-icon.png',
                    shadowUrl: 'assets/images/leaflet/marker-shadow.png',
                }),
            }),

            circle([51.508, -0.11], {
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.5,
                radius: 500,
            }),

            polygon([
                [51.509, -0.08],
                [51.503, -0.06],
                [51.51, -0.047],
            ]),
        ]
    }

    dragMapOptions: MapOptions = {
        center: latLng(48.817152, 2.455),
        zoom: 12,
        layers: [
            tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>', maxZoom: 18, }),
            marker([48.817152, 2.455], {
                draggable: true,
                icon: icon({
                    iconUrl: 'assets/images/leaflet/marker-icon.png',
                    shadowUrl: 'assets/images/leaflet/marker-shadow.png',
                }),
            }).bindPopup("<b>You're here!</b>").openPopup(),
        ]

    }

    useLocationMapOptions: MapOptions = {
        center: latLng(42.35, -71.08),
        zoom: 10,
        layers: [tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>', maxZoom: 18, })]
    }

    customIconMapOptions: MapOptions = {
        center: latLng(51.5, -0.09),
        zoom: 10,
        layers: [tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>', maxZoom: 18, }),

        marker([51.5, -0.09], { icon: this.iconConfig('red') }),
        marker([51.4, -0.51], { icon: this.iconConfig('green') }),
        marker([51.49, -0.45], { icon: this.iconConfig('orange') }),
        ]
    }

    layerMapOptions: MapOptions = {
        center: latLng(39.73, -104.99),
        zoom: 10,
        layers: [tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>', maxZoom: 18, }), this.cities,],
    }


    geoMapOptions: MapOptions = {
        center: latLng(44.2669, -72.576),
        zoom: 3,
        layers: [tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>', maxZoom: 18, }),

        geoJSON([statesData as any], {
            style: (feature: any) => ({
                fillColor: this.getColor(feature.properties.density),
                weight: 2,
                opacity: 1,
                color: 'white',
                dashArray: '3',
                fillOpacity: 0.7,
            }),
        })
        ]
    }

    layersControlOptions = {
        baseLayers: {
            Street: tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>', maxZoom: 18, }),
            Watercolor: tileLayer('http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg', { attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>', maxZoom: 18, }),
        },
        overlays: {
            Cities: this.cities,
        },
    };

    onMapReady(map: Map): void {
        map.locate({ setView: true, maxZoom: 16 });
        map.on('locationfound', (e: any) => {
            const userMarker = marker(e.latlng).bindPopup(
                `You are somewhere around ${Math.round(e.accuracy)} meters from this point`
            );
            const userCircle = circle(e.latlng, { radius: e.accuracy });

            userMarker.addTo(map).openPopup();
            userCircle.addTo(map);
        });
    }
}
