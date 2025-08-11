# Animation Configurations

This document describes the available animation configurations for MemoryCard image and text animations, as well as how to use multiple configurations.

---
## Demo

---

## Image Animation Configs

- **fade**: Fades in with a slight scale effect.
- **slide**: Slides up with a subtle scale and fade.
- **scale**: Pops in with a spring scale and fade.
- **rotate**: Rotates in with a scale and fade.

Example usage:
```ts
import { imageAnimationConfigs } from "../constants/animationConfigs";

const config = imageAnimationConfigs.fade;
```

## Text Animation Configs

- **fade**: Fades in and animates the top property.
- **slide**: Slides in by animating the top property.
- **scale**: Scales up and animates the top property.
- **rotate**: Rotates and animates the top property.

Example usage:
```ts
import { textAnimationConfigs } from "../constants/animationConfigs";

const config = textAnimationConfigs.slide;
```

## Multiple Videos Configuration

You can configure multiple videos for cards by adding a `videos` array to your card data:

```ts
const card = {
  title: "React Basics",
  videos: [
    { url: "https://example.com/video1.mp4", label: "Intro" },
    { url: "https://example.com/video2.mp4", label: "Advanced" },
  ],
  animation: "fade",
};
```

In your component, you can render these videos using a video player component and allow users to select between them.

---

For more details, see the code in `constants/animationConfigs.ts` and your card data structure.
