import { animate, inView } from 'motion';

type AnimationTarget = Parameters<typeof animate>[1];

const runAnimation = (element: HTMLElement, keyframes: Record<string, unknown>, options: Parameters<typeof animate>[2]): void => {
  animate(element, keyframes as AnimationTarget, options);
};

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  document.documentElement.classList.add('motion-ready');

  inView('.reveal', (element) => {
    runAnimation(element as HTMLElement, { opacity: [0, 1], y: [18, 0] }, { duration: 0.65, ease: [0.22, 1, 0.36, 1] });
  }, { amount: 0.16 });

  document.querySelectorAll<HTMLElement>('[data-hero-item]').forEach((element, index) => {
    runAnimation(element, { opacity: [0, 1], y: [12, 0] }, {
      delay: index * 0.08,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    });
  });
}
