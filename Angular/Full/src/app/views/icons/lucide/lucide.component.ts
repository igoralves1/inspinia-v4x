import {Component} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {
    LucideAngularModule, LucideArrowDown, LucideArrowLeft, LucideArrowRight, LucideArrowUp,
    LucideBadgeDollarSign,
    LucideBadgePercent,
    LucideBell, LucideBluetooth, LucideBook, LucideBriefcase,
    LucideCalendar,
    LucideCamera,
    LucideCheck,
    LucideCloud, LucideCloudUpload, LucideDatabase, LucideFile, LucideFilm,
    LucideFlag,
    LucideFolder,
    LucideGamepad2,
    LucideGlobe,
    LucideHeadphones,
    LucideHeadset,
    LucideHeart,
    LucideHome,
    LucideKey,
    LucideLayers,
    LucideLayoutDashboard, LucideLock, LucideMail,
    LucideMessageCircle,
    LucideMic,
    LucideMonitor, LucideMusic, LucidePaperclip,
    LucidePhone,
    LucidePrinter, LucideRefreshCcw, LucideSearch,
    LucideSettings, LucideShare, LucideShield, LucideShoppingCart,
    LucideSpeaker,
    LucideStar,
    LucideTablet, LucideUpload, LucideUsb,
    LucideUser, LucideUserCircle,
    LucideWatch, LucideWifi
} from 'lucide-angular';

@Component({
    selector: 'app-lucide',
    imports: [
        PageTitleComponent,
        LucideAngularModule
    ],
    templateUrl: './lucide.component.html',
    styles: ``
})
export class LucideComponent {

    protected readonly LucideLayoutDashboard = LucideLayoutDashboard;
    protected readonly LucideCamera = LucideCamera;
    protected readonly LucideHeart = LucideHeart;
    protected readonly LucideStar = LucideStar;
    protected readonly LucideCheck = LucideCheck;
    protected readonly LucideBell = LucideBell;
    protected readonly LucideCloud = LucideCloud;
    protected readonly LucideUser = LucideUser;
    protected readonly LucideHome = LucideHome;
    protected readonly LucideSettings = LucideSettings;
    protected readonly LucideCalendar = LucideCalendar;
    protected readonly LucideMessageCircle = LucideMessageCircle;
    protected readonly LucideFlag = LucideFlag;
    protected readonly LucideFolder = LucideFolder;
    protected readonly LucideGlobe = LucideGlobe;
    protected readonly LucideKey = LucideKey;
    protected readonly LucideLayers = LucideLayers;
    protected readonly LucidePhone = LucidePhone;
    protected readonly LucideBadgeDollarSign = LucideBadgeDollarSign;
    protected readonly LucideMonitor = LucideMonitor;
    protected readonly LucideTablet = LucideTablet;
    protected readonly LucideGamepad2 = LucideGamepad2;
    protected readonly LucideWatch = LucideWatch;

    lucideIcons = [
        {icon: LucidePhone, name: 'Phone'},
        {icon: LucideBadgePercent, name: 'Ad 2'},
        {icon: LucideHeadphones, name: 'Headphones'},
        {icon: LucideCamera, name: 'Camera'},
        {icon: LucideWatch, name: 'Watch'},
        {icon: LucideMic, name: 'Microphone'},
        {icon: LucideHeadset, name: 'Headset'},
        {icon: LucideTablet, name: 'Tablet'},
        {icon: LucideGamepad2, name: 'Gamepad'},
        {icon: LucidePrinter, name: 'Printer'},
        {icon: LucideSpeaker, name: 'Speaker'},
        {icon: LucideDatabase, name: 'Database'},
        {icon: LucideCloud, name: 'Cloud'},
        {icon: LucideWifi, name: 'Wi-Fi'},
        {icon: LucideBluetooth, name: 'Bluetooth'},
        {icon: LucideUsb, name: 'USB'},
        {icon: LucideFolder, name: 'Folder'},
        {icon: LucideLock, name: 'Lock'},
        {icon: LucideKey, name: 'Key'},
        {icon: LucideShield, name: 'Shield'},
        {icon: LucidePaperclip, name: 'Paperclip'},
        {icon: LucideBell, name: 'Bell'},
        {icon: LucideSearch, name: 'Search'},
        {icon: LucideBriefcase, name: 'Briefcase'},
        {icon: LucideShoppingCart, name: 'Cart'},
        {icon: LucideFile, name: 'File'},
        {icon: LucideBook, name: 'Book'},
        {icon: LucideMail, name: 'Mail'},
        {icon: LucideUser, name: 'User'},
        {icon: LucideUserCircle, name: 'User Circle'},
        {icon: LucideMusic, name: 'Music'},
        {icon: LucideFilm, name: 'Movie'},
        {icon: LucideUpload, name: 'Upload'},
        {icon: LucideCloudUpload, name: 'Cloud Upload'},
        {icon: LucideShare, name: 'Share'},
        {icon: LucideArrowRight, name: 'Arrow Right'},
        {icon: LucideArrowLeft, name: 'Arrow Left'},
        {icon: LucideArrowUp, name: 'Arrow Up'},
        {icon: LucideArrowDown, name: 'Arrow Down'},
        {icon: LucideSearch, name: 'Arrow Down'},
        {icon: LucideRefreshCcw, name: 'Refresh'}
    ];

}
