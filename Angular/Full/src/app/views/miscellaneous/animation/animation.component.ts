import {Component} from '@angular/core';
import {PageTitleComponent} from "@app/components/page-title.component";
import {UiCardComponent} from "@app/components/ui-card.component";
import {NgbAccordionModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-animation',
    imports: [PageTitleComponent, UiCardComponent, NgbAccordionModule],
    templateUrl: './animation.component.html',
    styles: ``
})
export class AnimationComponent {
    animationGroups = [
        {
            label: 'Attention Seekers',
            animations: ['bounce', 'flash', 'pulse', 'rubberBand', 'shakeX', 'shakeY', 'headShake', 'swing', 'tada', 'wobble', 'jello', 'heartBeat'],
        },
        {
            label: 'Bouncing Entrances',
            animations: ['bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp'],
        },
        {
            label: 'Fading Entrances',
            animations: ['fadeIn', 'fadeInDown', 'fadeInLeft', 'fadeInRight', 'fadeInUp'],
        },
        {
            label: 'Fading Exits',
            animations: ['fadeOut', 'fadeOutDown', 'fadeOutLeft', 'fadeOutRight', 'fadeOutUp'],
        },
        {
            label: 'Flippers',
            animations: ['flip', 'flipInX', 'flipInY', 'flipOutX', 'flipOutY'],
        },
        {
            label: 'Light Speed',
            animations: ['lightSpeedInLeft', 'lightSpeedInRight', 'lightSpeedOutLeft', 'lightSpeedOutRight'],
        },
        {
            label: 'Rotate',
            animations: ['rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight'],
        },
        {
            label: 'Zoom',
            animations: ['zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp', 'zoomOut', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp'],
        },
        {
            label: 'Sliding',
            animations: ['slideInDown', 'slideInLeft', 'slideInRight', 'slideInUp', 'slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp'],
        },
        {
            label: 'Special',
            animations: ['hinge', 'jackInTheBox', 'rollIn', 'rollOut'],
        },
    ];

    applyAnimation(animation: string): void {
        const el = document.getElementById('animation_box');
        if (el) {
            el.classList.remove(...Array.from(el.classList).filter(c => c.startsWith('animate__')));
            void el.offsetWidth;
            el.classList.add('animate__animated', `animate__${animation}`);
        }
    }
}
