// Animation config for image background (opacity, transform)
export const imageAnimationConfigs = {
  fade: {
    from: { opacity: 0, scale: 0.96 },
    animate: { opacity: 1, scale: 1 },
    transition: { type: "timing" as const, duration: 300 },
  },
  slide: {
    from: { translateY: 40, opacity: 0, scale: 0.98 },
    animate: { translateY: 0, opacity: 1, scale: 1 },
    transition: {
      type: "timing" as const,
      duration: 500,
    },
  },
  scale: {
    from: { scale: 0.85, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { type: "spring" as const, damping: 12, mass: 0.8 },
  },
  rotate: {
    from: { rotateZ: "-18deg", scale: 0.92, opacity: 0 },
    animate: { rotateZ: "0deg", scale: 1, opacity: 1 },
    transition: {
      type: "timing" as const,
      duration: 100,
    },
  },
};

// Animation config for text (scale/translate, always opacity 1)
export const textAnimationConfigs = {
  fade: {
    from: { scale: 1, top: 30, opacity: 1 },
    animate: { scale: 1, top: "50%", opacity: 1 },
    transition: { type: "timing" as const, duration: 300 },
  },
  slide: {
    from: { top: 30, opacity: 0.2 },
    animate: { top: 30, opacity: 1 },
    transition: { type: "timing" as const, duration: 300 },
  },
  scale: {
    from: { scale: 0.8, top: 30, opacity: 1 },
    animate: { scale: 1.3, top: 30, opacity: 1 },
    transition: { type: "timing" as const, duration: 600 },
  },
  rotate: {
    from: { rotateZ: "-10deg", top: 30, opacity: 1 },
    animate: { rotateZ: "0deg", top: 30, opacity: 1 },
    transition: { type: "timing" as const, duration: 300 },
  },
};
