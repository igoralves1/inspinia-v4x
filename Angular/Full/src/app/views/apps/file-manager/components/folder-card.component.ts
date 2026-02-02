import {Component, Input} from '@angular/core';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterLink} from '@angular/router';
import {NgIcon} from '@ng-icons/core';
import {FolderType} from '@/app/views/apps/file-manager/types';
import {formatFileSize} from '@/app/utils/file-utils';

@Component({
    selector: 'app-folder-card',
    imports: [NgbDropdownModule, RouterLink, NgIcon],
    template: `
        <div class="card">
            <div class="card-body p-2">
                <div class="d-flex align-items-center justify-content-between gap-2">
                    <div class="flex-shrink-0 avatar-md bg-light bg-opacity-50 text-muted rounded-2 d-flex align-items-center justify-content-center">
                        <ng-icon name="tablerFolder" class="fs-24 avatar-title d-flex"></ng-icon>
                    </div>
                    <div class="flex-grow-1">
                        <h5 class="mb-1 fs-sm"><a [routerLink]="[]" class="link-reset">{{
                                item.name
                            }}</a></h5>
                        <p class="text-muted mb-0 fs-xs">{{ formatFileSize(item.size) }}</p>
                    </div>
                    <div ngbDropdown class="flex-shrink-0 text-muted">
                        <a href="javascript:void(0)" ngbDropdownToggle class="drop-arrow-none fs-xxl link-reset p-0">
                            <ng-icon name="tablerDotsVertical"/>
                        </a>
                        <div class="dropdown-menu-end" ngbDropdownMenu>
                            <a href="javascript:void(0);" ngbDropdownItem><ng-icon name="tablerShare" class="me-1"/> Share</a>
                            <a href="javascript:void(0);" ngbDropdownItem><ng-icon name="tablerLink" class="me-1"/> Get Sharable Link</a>
                            <a href="assets/images/users/user-1.jpg" ngbDropdownItem><ng-icon name="tablerDownload"
                                class="me-1"/>
                                Download</a>
                            <a href="javascript:void(0);" ngbDropdownItem><ng-icon name="tablerPin"
                                class="me-1"/> Pin</a>
                            <a href="javascript:void(0);" ngbDropdownItem><ng-icon name="tablerEdit" class="me-1"/> Edit</a>
                            <a href="javascript:void(0);" ngbDropdownItem><ng-icon  name="tablerTrash" class="me-1"/>
                                Delete</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: ``
})
export class FolderCardComponent {
    @Input() item!: FolderType;
    protected readonly formatFileSize = formatFileSize;
}
