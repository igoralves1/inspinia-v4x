import {Component} from '@angular/core';
import {FileMenuType} from '@/app/views/apps/file-manager/types';
import {NgIcon} from '@ng-icons/core';
import {RouterLink} from '@angular/router';
import {SimplebarAngularModule} from 'simplebar-angular';

@Component({
    selector: 'app-file-sidebar',
    imports: [NgIcon, RouterLink, SimplebarAngularModule],
    template: `
        <div class="card h-100  mb-0 rounded-0 border-0">
            <ngx-simplebar style="height: 100%">
                <div class="card-body w-100">
                    <a [routerLink]="[]" class="btn btn-danger fw-medium w-100">Upload Files</a>

                    <div class="list-group list-group-flush list-custom mt-3">
                        @for (item of fileMenuItems; track i; let i = $index; let first = $first) {
                            <a
                                [href]="item.link"
                                class="list-group-item list-group-item-action"
                                [class.active]="first"
                            >
                                <div class="d-inline-flex align-items-center gap-1">
                                    <ng-icon [name]="item.icon" class="me-1 opacity-75 fs-lg"></ng-icon>
                                    <span class="align-middle">{{ item.label }}</span>
                                </div>
                                @if (item.badge) {
                                    <span
                                        class="badge align-middle bg-{{item.badge.variant}}-subtle text-{{item.badge.variant}} float-end fs-xxs">
                                        {{ item.badge.text }}
                                    </span>
                                }
                            </a>
                        }

                        <div class="list-group-item mt-2">
                            <span class="align-middle">Categories</span>
                        </div>

                        @for (category of fileCategories; track i;let i = $index) {
                        <a href="javascript:void(0);"
                           class="list-group-item list-group-item-action d-flex align-items-center gap-1">
                            <ng-icon [name]="category.icon"
                                     class="me-1 align-middle fs-sm text-{{category.variant}}"></ng-icon>
                            <span class="align-middle">{{ category.label }}</span>
                        </a>
                        }
                    </div>
                </div>

                <div class="position-absolute bottom-0 start-0 w-100 overflow-hidden" style="pointer-events: none;">
                    <svg viewBox="0 0 600 560" preserveAspectRatio="xMinYMax meet" width="100%" height="100%"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg" style="opacity: 0.05;">
                        <!-- Circle -->
                        <circle cx="50" cy="480" r="40" fill="#FF4C3E"/>

                        <!-- Wavy Path -->
                        <path d="M140 440 C130 470, 100 470, 90 440 S50 410, 40 440" stroke="#089df1" stroke-width="2"
                              fill="none"/>

                        <!-- Triangle -->
                        <path d="M100 360 L50 410 L0 360 Z" fill="#f9bf59"/>

                        <!-- Oval -->
                        <ellipse cx="80" cy="280" rx="30" ry="50" fill="#7b70ef"/>

                        <!-- Rounded Diamond -->
                        <path d="M140 240 Q130 260 110 250 Q90 240 100 220 Q110 200 130 210 Q150 220 140 240 Z"
                              fill="#089df1"/>

                        <!-- Organic blob -->
                        <path
                            d="M130 150 C140 170, 110 180, 90 170 C70 160, 60 140, 80 120 C100 100, 120 110, 130 150 Z"
                            fill="#f7577e"/>

                        <!-- Star -->
                        <path d="M220 480 L212 460 H190 L208 445 L200 425 L220 437 L240 425 L232 445 L250 460 H228 Z"
                              fill="#7b70ef"/>

                        <!-- Spiral -->
                        <path
                            d="M310 460 C300 470, 290 450, 300 440 C310 430, 330 430, 340 440 C350 450, 350 470, 340 480"
                            stroke="#089df1" stroke-width="2" fill="none"/>

                        <!-- Custom Polygon (Irregular Shape) -->
                        <path d="M280 360 L270 350 L280 330 L300 330 L310 350 Z" fill="#f7577e"/>

                        <!-- Ring -->
                        <circle cx="140" cy="310" r="20" stroke="#089df1" stroke-width="3" fill="none"/>
                    </svg>
                </div>
            </ngx-simplebar>
        </div>
    `,
    styles: ``
})
export class FileSidebarComponent {
    fileMenuItems: FileMenuType[] = [
        {
            label: 'My Files',
            icon: 'tablerFolder',
            badge: {
                text: "12",
                variant: "danger",
            },
            link: '/apps/file-manager'
        },
        {
            label: 'Shared with Me',
            icon: 'tablerShare',
            link: 'javascript:void(0);'
        },
        {
            label: 'Recent',
            icon: 'tablerClock',
            link: 'javascript:void(0);'
        },
        {
            label: 'Favourites',
            icon: 'tablerStar',
            link: 'javascript:void(0);'
        },
        {
            label: 'Downloads',
            icon: 'tablerDownload',
            link: 'javascript:void(0);'
        },
        {
            label: 'Trash',
            icon: 'tablerTrash',
            link: 'javascript:void(0);'
        }
    ];

    fileCategories = [
        {
            label: 'Work',
            icon: 'tablerChartDonutFill',
            variant: 'primary'
        },
        {
            label: 'Projects',
            icon: 'tablerChartDonutFill',
            variant: 'purple'
        },
        {
            label: 'Media',
            icon: 'tablerChartDonutFill',
            variant: 'info'
        },
        {
            label: 'Documents',
            icon: 'tablerChartDonutFill',
            variant: 'warning'
        }
    ];
}
