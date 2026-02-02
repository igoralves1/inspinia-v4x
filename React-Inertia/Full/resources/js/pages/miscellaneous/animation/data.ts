type AnimationGroup = {
  name: string
  animations: string[]
}

export const animationGroups: AnimationGroup[] = [
  {
    name: 'Attention Seekers',
    animations: ['bounce', 'flash', 'pulse', 'rubberBand', 'shakeX', 'shakeY', 'headShake', 'swing', 'tada', 'wobble', 'jello', 'heartBeat'],
  },
  {
    name: 'Bouncing Entrances',
    animations: ['bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp'],
  },
  {
    name: 'Fading Entrances',
    animations: ['fadeIn', 'fadeInDown', 'fadeInLeft', 'fadeInRight', 'fadeInUp'],
  },
  {
    name: 'Fading Exits',
    animations: ['fadeOut', 'fadeOutDown', 'fadeOutLeft', 'fadeOutRight', 'fadeOutUp'],
  },
  {
    name: 'Flippers',
    animations: ['flip', 'flipInX', 'flipInY', 'flipOutX', 'flipOutY'],
  },
  {
    name: 'Light Speed',
    animations: ['lightSpeedInLeft', 'lightSpeedInRight', 'lightSpeedOutLeft', 'lightSpeedOutRight'],
  },
  {
    name: 'Rotate',
    animations: ['rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight'],
  },
  {
    name: 'Zoom',
    animations: [
      'zoomIn',
      'zoomInDown',
      'zoomInLeft',
      'zoomInRight',
      'zoomInUp',
      'zoomOut',
      'zoomOutDown',
      'zoomOutLeft',
      'zoomOutRight',
      'zoomOutUp',
    ],
  },
  {
    name: 'Sliding',
    animations: ['slideInDown', 'slideInLeft', 'slideInRight', 'slideInUp', 'slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp'],
  },
  {
    name: 'Special',
    animations: ['hinge', 'jackInTheBox', 'rollIn', 'rollOut'],
  },
]
