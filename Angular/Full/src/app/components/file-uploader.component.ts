import {Component} from '@angular/core';
import {NgIcon} from '@ng-icons/core';
import {formatFileSize} from '../utils/file-utils';
import {DROPZONE_CONFIG, DropzoneConfigInterface, DropzoneModule,} from 'ngx-dropzone-wrapper';

type UploadedFile = {
    name: string;
    size: number;
    type: string;
    dataURL?: string;
    loading?: boolean
};

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
    // Change this to your upload POST address:
    url: 'https://httpbin.org/post',
    maxFilesize: 50,
    acceptedFiles: 'image/*',
};

@Component({
    selector: 'FileUploader',
    standalone: true,
    imports: [DropzoneModule, NgIcon],
    template: `
        <dropzone
            class="dropzone"
            [config]="dropzoneConfig"
            [message]="dropzone"
            (addedFile)="onFileAdded($event)"
        ></dropzone>
        @if (uploadedFiles) {
            <div class="dropzone-previews mt-3" id="file-previews">
                @for (file of uploadedFiles; track file.name; let index = $index) {
                    <div
                        class="card mt-1 mb-0 border-dashed border"
                    >
                        <div class="p-2">
                            <div class="row align-items-center">
                                <div class="col-auto">
                                    <img
                                        data-dz-thumbnail=""
                                        [src]="file.dataURL"
                                        class="avatar-sm rounded bg-light"
                                    />
                                </div>
                                <div class="col ps-0">
                                    <a href="javascript:void(0);" class="fw-semibold">{{
                                            file.name
                                        }}</a>
                                    <p class="mb-0 text-muted" data-dz-size="">
                                        <strong>{{ formatFileSize(file.size) }}</strong>
                                    </p>
                                </div>
                                <div class="col-auto">
                                    <a
                                        (click)="removeFile(index)"
                                        class="btn btn-link btn-lg text-danger"
                                    >
                                        <ng-icon name="tablerX"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        }
    `,
    providers: [
        {
            provide: DROPZONE_CONFIG,
            useValue: DEFAULT_DROPZONE_CONFIG,
        },
    ],
})
export class FileUploaderComponent {
    formatFileSize = formatFileSize
    uploadedFiles: UploadedFile[] = [];

    dropzoneConfig: DropzoneConfigInterface = {
        url: 'https://httpbin.org/post',
        maxFilesize: 50,
        clickable: true,
        addRemoveLinks: true,
        previewsContainer: false,
    };

    dropzone = `
   <div class="dz-message needsclick">
             <div class="avatar-lg mx-auto my-3">
                        <span class="avatar-title bg-info-subtle text-info rounded-circle">
                            <span class="fs-24 text-info">
                            <span class="fs-24 upload-icon"></span>
                        </span>
                        </span>
                    </div>
                        <h4 class="mb-2">Drop files here or click to upload.</h4>
                        <p class="text-muted fst-italic mb-3">You can drag images here, or browse files via the button below.</p>
            <span class="d-block pb-3">
                <span type="button" class="btn btn-sm shadow btn-default">Browse Images</span>
            </span>
        </div>`;

    imageURL: string = '';

    onFileAdded(file: any) {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
            const dataUrl = e.target?.result as string;
            this.uploadedFiles.push({
                name: file.name,
                size: file.size,
                type: file.type,
                dataURL: dataUrl,
            });
        };
        reader.readAsDataURL(file);
    }

    removeFile(index: number) {
        this.uploadedFiles.splice(index, 1);
    }
}
