# Memory Card Animation Plan

## Overview
We are building a single tappable memory card in a React Native (Expo) project.  
The card expands/collapses with smooth animations using **Moti** and **React Native Reanimated**.

---
## Big Plan 1: Core Component Creation
**Goal:** Build a `MemoryCard` component that is reusable and independent of hardcoded values.

### Tasks
- [ ] Create `MemoryCard.tsx` inside `src/components/`.
- [ ] Accept props:
  - `title: string`
  - `image?: string` (optional placeholder)
  - `collapsedHeight?: number` (default 80)
  - `expandedHeight?: number` (default 260)
  - `onToggle?: (expanded: boolean) => void`
- [ ] Keep styles in a separate `MemoryCard.styles.ts` file for cleaner code.
- [ ] Make the component **pure** using `React.memo` to avoid unnecessary re-renders.
- [ ] Add `accessibilityRole` and `accessibilityLabel` props.

---

## Big Plan 2: Animation Logic
**Goal:** Implement smooth expand/collapse with Moti while keeping the code modular.

### Tasks
#### Card Height Animation
- [ ] Use a `MotiView` wrapper for the container.
- [ ] Animate `height` between `collapsedHeight` and `expandedHeight`.
- [ ] Use `useState` for the toggle and `useCallback` to avoid re-creating handlers.

#### Media Fade Animation
- [ ] Wrap media block in `AnimatePresence` + `MotiView`.
- [ ] Animate `opacity` in/out.
- [ ] Use `delay` to create a staged animation effect after height change.

#### Title Position Animation
- [ ] Wrap title in its own `MotiView`.
- [ ] Animate `translateY` slightly upward when expanded.
- [ ] Keep the animation duration consistent with card height.

---

## Big Plan 3: Accessibility & Reduced Motion
**Goal:** Make the component accessible and motion-friendly.

### Tasks
- [ ] Use `AccessibilityInfo.isReduceMotionEnabled()` to detect reduced motion.
- [ ] Disable or shorten animation duration if reduced motion is enabled.
- [ ] Add `accessibilityRole="button"` and meaningful `accessibilityLabel`.

---

## Big Plan 4: Screen Integration
**Goal:** Showcase the component in a clean, testable environment.

### Tasks
- [ ] Create a `HomeScreen.tsx` in `src/screens/`.
- [ ] Import and render a single `MemoryCard`.
- [ ] Pass props for `title` and optional `image`.
- [ ] Wrap in a `SafeAreaView` with centered layout.

---

## Big Plan 5: Optimization & Scalability
**Goal:** Make the component production-ready and reusable in larger lists.

### Tasks
- [ ] Add `shouldComponentUpdate` / `React.memo` for performance.
- [ ] Allow custom animations via props (e.g., `animationDuration`, `animationDelay`).
- [ ] Keep animation constants in `styles/animation.ts` for reuse.
- [ ] Write helper hook: `useReducedMotionDuration(defaultDuration)`.

---

## Big Plan 6: Documentation & GitHub Setup
**Goal:** Document and share the project clearly.

### Tasks
- [ ] Create a `README.md` with:
  - Animation library details
  - Run instructions
  - Improvement ideas
- [ ] Include code comments in `MemoryCard.tsx` for maintainability.
- [ ] Push to GitHub: `memory-card-moti`
- [ ] Add `.gitignore` for Expo & React Native.

---

## Big Plan 7: Future Improvements
**Goal:** Plan for scaling beyond MVP.

### Tasks
- [ ] Support gestures for expand/collapse (`react-native-gesture-handler`).
- [ ] Support shared-element transition to full-screen detail view.
- [ ] Lazy-load high-resolution media after expansion.
- [ ] Add unit tests with `@testing-library/react-native` and Jest.

---
