import {Component} from '@angular/core';
import {UiCardComponent} from '@app/components/ui-card.component';
import {NgIcon} from '@ng-icons/core';
import {formatFileSize} from '@/app/utils/file-utils';
import {RouterLink} from '@angular/router';
import {fileItems} from '@/app/views/widgets/data';

@Component({
    selector: 'app-file-manage-card',
    imports: [
        UiCardComponent,
        NgIcon,
        RouterLink,
    ],
    template: `
        <app-ui-card title="File Manage">
            <a helper-text href="javascript: void(0);" class="btn btn-light btn-sm btn-icon rounded-circle">
                <ng-icon name="tablerPlus"/>
            </a>

            <div card-body>
                @for (file of fileItems; track $index; let last = $last; ) {
                    <div [class]="!last ? 'pb-2': ''" class="d-flex justify-content-between align-items-center">
                        <div class="d-flex align-items-center py-1 gap-2">
                            <div
                                class="flex-shrink-0 avatar-md bg-light bg-opacity-50 text-muted rounded-2 d-flex align-items-center justify-content-center">
                                <ng-icon [name]="file.icon" class="fs-xl avatar-title"/>
                            </div>
                            <div class="flex-grow-1">
                                <h5 class="mb-1 fs-base">
                                    <a [routerLink]="[]" class="link-reset">{{ file.name }}</a>
                                </h5>
                                <p class="text-muted mb-0 fs-xs">
                                    {{ formatFileSize(file.size) }}
                                </p>
                            </div>
                        </div>

                        <div class="avatar-group avatar-group-xs">
                            @for (user of file.users; track $index) {
                                <div class="avatar">
                                    <img [src]="user" class="rounded-circle avatar-xs" alt="">
                                </div>
                            }
                        </div>

                        <div>
                            <a [routerLink]="[]" class="btn btn-sm btn-icon btn-default" title="Download">
                                <ng-icon name="tablerDownload" class="fs-lg"/>
                            </a>
                        </div>
                    </div>
                }
            </div>
        </app-ui-card>
    `,
})
export class FileManageCardComponent {
    protected readonly formatFileSize = formatFileSize;
    protected readonly fileItems = fileItems;
}
