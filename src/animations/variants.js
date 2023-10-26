export const slideInFromLeft = {
  initial: { opacity: 0, translateX: -100 },
  animate: {
    opacity: 1,
    translateX: [0, 100, 0],
    transition: { ease: "easeIn", duration: 1, delay: 0.1 },
  },
};
export const slideInFromBottom = {
  initial: { opacity: 0, translateY: 50 },
  animate: {
    opacity: 1,
    translateY: 0,
    transition: { ease: "easeIn", duration: 1 },
  },
};
export const slideInFromLeftNoBounce = {
  initial: { opacity: 0, translateX: -100 },
  animate: {
    opacity: 1,
    translateX: 0,
    transition: { ease: "easeIn", duration: 0.8, delay: 0.8 },
  },
};
export const scaleFromZero = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { ease: "easeIn", duration: 0.8, delay: 0.1 },
  },
};

export const dropFromTop = {
  initial: { translateY: -1000 },
  animate: {
    translateY: 0,
    transition: { ease: "easeIn", duration: 0.8, delay: 1.2 },
  },
};

export const staggerAnimationLeft = {
  initial: { opacity: 0, translateX: -50 },
  animate: (index) => ({
    opacity: 1,
    translateX: 0,
    transition: { duration: 0.6, delay: index * 0.4 },
  }),
};
export const staggerdropFromTop = {
  initial: { opacity: 0, translateY: -80 },
  animate: (index) => ({
    opacity: 1,
    translateY: 0,
    transition: { duration: 0.6, delay: index * 0.3 },
  }),
};
