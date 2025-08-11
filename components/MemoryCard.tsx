import { useReducedMotionDuration } from "@/hooks/useReducedMotionDuration";
import { ANIMATION } from "@/styles/animation";
import styles from "@/styles/MemoryCard.styles";
import { BlurView } from "expo-blur";
import { MotiView, useAnimationState, useDynamicAnimation } from "moti";
import React, { memo, useCallback, useState } from "react";
import {
  AccessibilityProps,
  AccessibilityRole,
  Image,
  Pressable,
  Text,
  View,
} from "react-native";

export interface MemoryCardProps extends AccessibilityProps {
  title: string;
  image?: string;
  collapsedHeight?: number;
  expandedHeight?: number;
  onToggle?: (expanded: boolean) => void;
  accessibilityRole?: AccessibilityRole;
  accessibilityLabel?: string;
}

const MemoryCard: React.FC<MemoryCardProps> = memo(
  ({
    title,
    image,
    collapsedHeight = 80,
    expandedHeight = 260,
    onToggle,
    accessibilityRole = "button",
    accessibilityLabel,
    ...rest
  }) => {
    const [expanded, setExpanded] = useState(false);
    const duration = useReducedMotionDuration(ANIMATION.duration);

    // Animation state for text overlay
    // Two-step animation: expand, then move title up
    const textAnim = useAnimationState({
      collapsed: {
        scale: 1,
        opacity: 1,
        shadowOpacity: 0.12,
        translateY: 0,
      },
      expanded: {
        scale: 1.25,
        opacity: 1,
        shadowOpacity: 0.22,
        translateY: 0,
      },
      expandedUp: {
        scale: 1.25,
        opacity: 1,
        shadowOpacity: 0.22,
        translateY: -18,
      },
    });

    // Sequence: expand, then move up
    React.useEffect(() => {
      if (expanded) {
        textAnim.transitionTo("expanded");
        const timeout = setTimeout(() => {
          textAnim.transitionTo("expandedUp");
        }, duration * 0.7); // move up after most of expand
        return () => clearTimeout(timeout);
      } else {
        textAnim.transitionTo("collapsed");
      }
    }, [expanded, textAnim, duration]);

    // Dynamic animation for blur overlay (do not set value during render)
    const blurAnim = useDynamicAnimation(() => ({ opacity: 1 }));
    React.useEffect(() => {
      blurAnim.animateTo({ opacity: expanded ? 0 : 1 });
    }, [expanded, blurAnim]);

    const handleToggle = useCallback(() => {
      setExpanded((prev) => {
        const next = !prev;
        onToggle?.(next);
        blurAnim.animateTo({ opacity: next ? 0 : 1 });
        return next;
      });
    }, [onToggle, blurAnim]);

    return (
      <Pressable
        accessibilityRole={accessibilityRole}
        accessibilityLabel={accessibilityLabel || title}
        onPress={handleToggle}
        style={{ width: "100%" }}
        {...rest}
      >
        <MotiView
          animate={{ height: expanded ? expandedHeight : collapsedHeight }}
          transition={{ type: "timing", duration }}
          style={styles.container}
        >
          <View style={styles.imageWrapper}>
            <View
              style={[styles.imageFadeWrap, { justifyContent: "flex-end" }]}
            >
              {image && (
                <React.Fragment>
                  <Image
                    source={{ uri: image }}
                    style={styles.image}
                    resizeMode="cover"
                  />
                  <MotiView
                    style={styles.blurOverlay}
                    state={blurAnim}
                    transition={{ type: "timing", duration }}
                  >
                    <BlurView
                      intensity={60}
                      tint="light"
                      style={styles.blurFill}
                    />
                  </MotiView>
                </React.Fragment>
              )}
              <MotiView
                style={[styles.titleOverlay]}
                state={textAnim}
                transition={{ type: "timing", duration }}
              >
                <Text
                  style={styles.titleInImage}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  {title}
                </Text>
              </MotiView>
            </View>
          </View>
        </MotiView>
      </Pressable>
    );
  }
);

export default MemoryCard;
