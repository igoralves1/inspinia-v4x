import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class FaviconService {
    private faviconElement: HTMLLinkElement;

    constructor(@Inject(DOCUMENT) private document: Document) {
        this.faviconElement = this.getFaviconElement();
    }

    private getFaviconElement(): HTMLLinkElement {
        let link = this.document.querySelector('link[rel~="icon"]') as HTMLLinkElement | null;

        if (!link) {
            link = this.document.createElement('link');
            link.rel = 'icon';
            this.document.head.appendChild(link);
        }
        return link;
    }

    setFavicon(url: string): void {
        this.faviconElement.href = url;
    }

    setFaviconWithBadge(content: string | number, color: string = '#f03d25', baseFaviconUrl: string = '/favicon.ico'): void {
        const size = 64;
        const badgeSize = size * 0.6;
        const canvas = document.createElement('canvas');
        canvas.width = canvas.height = size;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const image = new Image();
        image.crossOrigin = 'anonymous';
        image.src = baseFaviconUrl;

        image.onload = () => {
            ctx.clearRect(0, 0, size, size);
            ctx.drawImage(image, 0, 0, size, size);

            const x = size - badgeSize - 4;
            const y = size - badgeSize - 4;

            ctx.fillStyle = color;
            ctx.fillRect(x, y, badgeSize, badgeSize);

            ctx.fillStyle = '#fff';
            ctx.font = `bold ${badgeSize * 0.9}px sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            const text = content.toString().substring(0, 3);
            ctx.fillText(text, x + badgeSize / 2, y + badgeSize / 2 + 1);

            const url = canvas.toDataURL('image/png');
            this.setFavicon(url);
        };

        image.onerror = () => {
            console.warn('Could not load base favicon:', baseFaviconUrl);
        };
    }

    resetFavicon(defaultUrl: string = '/favicon.ico'): void {
        this.setFavicon(defaultUrl);
    }
}
