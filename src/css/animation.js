

import anime from 'animejs';

export const animateHeader = () => {
  anime({
    targets: '.header-container',
    translateY: [-10, 0],
    opacity: [0, 1],
    duration: 100,
    easing: 'easeInOutQuad',
  });
};

export const animateNavbarLinks = () => {
  anime({
    targets: '.navbar a',
    translateX: [-20, 0],
    opacity: [0, 1],
    delay: anime.stagger(100),
    duration: 100,
    easing: 'easeInOutQuad',
  });
};

export const animateLionLinks = () => {
  anime({
    targets: '.lion a',
    translateX: [20, 0],
    opacity: [0, 1],
    delay: anime.stagger(100),
    duration: 100,
    easing: 'easeInOutQuad',
  });
};
