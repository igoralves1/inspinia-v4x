import {type AfterViewInit, Component, type OnInit, ViewChild} from '@angular/core';
import {PageTitleComponent} from "@app/components/page-title.component";
import {LucideAngularModule, LucideSearch} from 'lucide-angular';
import {GlightboxInitDirective} from '@core/directive/glightbox.directive';
import {NgxMasonryComponent, NgxMasonryModule} from 'ngx-masonry';

@Component({
    selector: 'app-gallery',
    imports: [PageTitleComponent, LucideAngularModule, GlightboxInitDirective, NgxMasonryModule],
    templateUrl: './gallery.component.html',
    styles: ``
})
export class GalleryComponent implements OnInit,AfterViewInit {
    @ViewChild(NgxMasonryComponent) masonry!: NgxMasonryComponent;
    ngAfterViewInit(): void {
        setTimeout(() => {
            this.masonry?.reloadItems();
            this.masonry?.layout();
        }, 0);
    }
    searchIcon=LucideSearch
    categoryFilter: string = '';
    images = [
        { category: 'beautiful', badgeText: 'beautiful', badgeClass: 'dark', src: 'assets/images/gallery/1.jpg', alt: 'Beautiful Image 1' },
        { category: 'nature', badgeText: 'Health', badgeClass: 'danger', src: 'assets/images/gallery/2.jpg', alt: 'Nature Health' },
        { category: 'beautiful', badgeText: 'Travel', badgeClass: 'primary', src: 'assets/images/gallery/3.jpg', alt: 'Beautiful Travel' },
        { category: 'nature', badgeText: 'Sports', badgeClass: 'warning', src: 'assets/images/gallery/6.jpg', alt: 'Nature Sports' },
        { category: 'nature', badgeText: 'Business', badgeClass: 'info', src: 'assets/images/gallery/4.jpg', alt: 'Nature Business' },
        { category: 'travel', badgeText: 'Education', badgeClass: 'success', src: 'assets/images/gallery/5.jpg', alt: 'Travel Education' },
        { category: 'city', badgeText: 'Fashion', badgeClass: 'secondary', src: 'assets/images/gallery/7.jpg', alt: 'City Fashion' },
        { category: 'travel', badgeText: 'Food', badgeClass: 'success', src: 'assets/images/gallery/9.jpg', alt: 'Travel Food' },
        { category: 'beautiful', badgeText: 'Entertainment', badgeClass: 'danger', src: 'assets/images/gallery/10.jpg', alt: 'Beautiful Entertainment' },
        { category: 'nature', badgeText: 'Sports', badgeClass: 'warning', src: 'assets/images/gallery/11.jpg', alt: 'Nature Sports' },
        { category: 'city', badgeText: 'Fashion', badgeClass: 'secondary', src: 'assets/images/gallery/12.jpg', alt: 'City Fashion' },
        { category: 'city', badgeText: 'Lifestyle', badgeClass: 'light', src: 'assets/images/gallery/13.jpg', alt: 'City Lifestyle 1' },
        { category: 'city', badgeText: 'Lifestyle', badgeClass: 'light', src: 'assets/images/gallery/8.jpg', alt: 'City Lifestyle 2' },
        { category: 'travel', badgeText: 'Food', badgeClass: 'success', src: 'assets/images/gallery/14.jpg', alt: 'Travel Food' },
    ];

    filteredImages = this.images;

    ngOnInit(): void {
        this.filterCategory('');
    }

    filterCategory(category: string): void {
        this.categoryFilter = category;
        this.filteredImages = category
            ? this.images.filter(img => img.category === category)
            : this.images;
    }

}

