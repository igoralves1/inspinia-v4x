import { Component } from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {NgIcon} from '@ng-icons/core';

@Component({
  selector: 'app-tabler',
    imports: [
        PageTitleComponent,
        NgIcon
    ],
  templateUrl: './tabler.component.html',
  styles: ``
})
export class TablerComponent {
    tablerIcons = [
        { icon: 'tablerPhone', name: 'Phone' },
        { icon: 'tablerAd2', name: 'Ad 2' },
        { icon: 'tablerHeadphones', name: 'Headphones' },
        { icon: 'tablerCamera', name: 'Camera' },
        { icon: 'tablerDeviceWatch', name: 'Watch' },
        { icon: 'tablerMicrophone', name: 'Microphone' },
        { icon: 'tablerHeadset', name: 'Headset' },
        { icon: 'tablerDeviceTablet', name: 'Tablet' },
        { icon: 'tablerDeviceGamepad', name: 'Gamepad' },
        { icon: 'tablerPrinter', name: 'Printer' },
        { icon: 'tablerDeviceSpeaker', name: 'Speaker' },
        { icon: 'tablerDatabase', name: 'Database' },
        { icon: 'tablerCloud', name: 'Cloud' },
        { icon: 'tablerWifi', name: 'WiFi' },
        { icon: 'tablerBluetooth', name: 'Bluetooth' },
        { icon: 'tablerUsb', name: 'USB' },
        { icon: 'tablerFolder', name: 'Folder' },
        { icon: 'tablerLock', name: 'Lock' },
        { icon: 'tablerKey', name: 'Key' },
        { icon: 'tablerShield', name: 'Shield' },
        { icon: 'tablerPaperclip', name: 'Paperclip' },
        { icon: 'tablerBell', name: 'Bell' },
        { icon: 'tablerSearch', name: 'Search' },
        { icon: 'tablerBriefcase', name: 'Briefcase' },
        { icon: 'tablerShoppingCart', name: 'Cart' },
        { icon: 'tablerFile', name: 'File' },
        { icon: 'tablerBook', name: 'Book' },
        { icon: 'tablerMail', name: 'Mail' },
        { icon: 'tablerUser', name: 'User' },
        { icon: 'tablerUserCircle', name: 'User Circle' },
        { icon: 'tablerPhoneCall', name: 'Phone Call' },
        { icon: 'tablerMusic', name: 'Music' },
        { icon: 'tablerMovie', name: 'Movie' },
        { icon: 'tablerFileUpload', name: 'Upload' },
        { icon: 'tablerCloudUpload', name: 'Cloud Upload' },
        { icon: 'tablerShare', name: 'Share' },
        { icon: 'tablerArrowRight', name: 'Arrow Right' },
        { icon: 'tablerArrowLeft', name: 'Arrow Left' },
        { icon: 'tablerArrowUp', name: 'Arrow Up' },
        { icon: 'tablerArrowDown', name: 'Arrow Down' },
        { icon: 'tablerRefresh', name: 'Refresh' },
    ];

}
