import { Component } from '@angular/core';
import { PageTitleComponent } from "@app/components/page-title.component";
import { NgIcon } from '@ng-icons/core';
import type { FilePondBaseProps } from 'filepond';
import { FilePondModule, registerPlugin } from 'ngx-filepond';
import { FileUploaderComponent } from "../../../components/file-uploader.component";
import { UiCardComponent } from "../../../components/ui-card.component";

import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

registerPlugin(
    FilePondPluginFileValidateSize,
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview,
)
@Component({
    selector: 'app-file-uploads',
    imports: [PageTitleComponent, NgIcon, UiCardComponent, FileUploaderComponent, FilePondModule],
    templateUrl: './file-uploads.component.html',
    styles: ``
})
export class FileUploadsComponent {

    basicFilePondConfig: FilePondBaseProps = {
        allowReorder: true,
        allowMultiple: true,
        fileSizeBase: 3000,
        maxFiles: 5,
    }

    userFilePondConfig = {
        imageResizeTargetWidth: 200,
        imageResizeTargetHeight: 200,
        stylePanelLayout: "compact circle",
        styleLoadIndicatorPosition: "center bottom",
        styleProgressIndicatorPosition: "right bottom",
        styleButtonRemoveItemPosition: "left bottom",
        styleButtonProcessItemPosition: "right bottom",
        allowImagePreview: true,
        imagePreviewHeight: 100,
        labelIdle: `<svg  xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="none"  stroke="#9ba6b7"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-camera"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" /><path d="M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /></svg>`,
    }

}
