# Animation Configurations

This document describes the available animation configurations for MemoryCard image and text animations, as well as how to use multiple configurations.

---
## Demo
https://github.com/user-attachments/assets/87dfbe87-de02-41cc-ba81-cca659196d85


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
---

For more details, see the code in `constants/animationConfigs.ts` and modify card data structure.
