import {
  imageAnimationConfigs,
  textAnimationConfigs,
} from "@/constants/animationConfigs";
import { useReducedMotionDuration } from "@/hooks/useReducedMotionDuration";
import { ANIMATION } from "@/styles/animation";
import styles from "@/styles/MemoryCard.styles";
import { generateHexFromTitle } from "@/utils/generateHexFromTitle";
import { BlurView } from "expo-blur";
import { MotiView } from "moti";
import React, { memo, useCallback, useEffect, useState } from "react";
import {
  AccessibilityProps,
  AccessibilityRole,
  Image,
  Pressable,
  Text,
} from "react-native";

export interface MemoryCardProps extends AccessibilityProps {
  title: string;
  image?: string;
  collapsedHeight?: number;
  expandedHeight?: number;
  onToggle?: (expanded: boolean) => void;
  accessibilityRole?: AccessibilityRole;
  accessibilityLabel?: string;
  animationKey?: "fade" | "slide" | "scale" | "rotate";
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
    animationKey = "fade",
    ...rest
  }) => {
    const [expanded, setExpanded] = useState(false);
    const duration = useReducedMotionDuration(ANIMATION.duration);
    const imageAnim = imageAnimationConfigs[animationKey || "fade"];
    const textAnim = textAnimationConfigs[animationKey || "fade"];

    // Preload image to avoid first-time lag
    useEffect(() => {
      if (image) Image.prefetch(image).catch(() => {});
    }, [image]);

    const handleToggle = useCallback(() => {
      setExpanded((prev) => {
        const next = !prev;
        onToggle?.(next);
        return next;
      });
    }, [onToggle]);

    return (
      <Pressable
        accessibilityRole={accessibilityRole}
        accessibilityLabel={accessibilityLabel || title}
        onPress={handleToggle}
        style={{ width: "100%" }}
        {...rest}
      >
        <MotiView
          from={{ height: collapsedHeight }}
          animate={{ height: expanded ? expandedHeight : collapsedHeight }}
          transition={{ type: "timing", duration }}
          style={[
            styles.container,
            {
              backgroundColor: generateHexFromTitle(title || ""),
            },
          ]}
        >
          <MotiView
            from={imageAnim.from}
            animate={expanded ? imageAnim.animate : imageAnim.from}
            transition={imageAnim.transition}
            style={styles.imageWrapper}
          >
            {image && (
              <>
                <Image
                  source={{ uri: image }}
                  style={styles.image}
                  resizeMode="cover"
                />
                <MotiView
                  animate={{ opacity: expanded ? 0 : 1 }}
                  transition={{ type: "timing", duration }}
                  style={styles.blurOverlay}
                >
                  <BlurView
                    intensity={60}
                    tint="light"
                    style={styles.blurFill}
                  />
                </MotiView>
              </>
            )}
          </MotiView>
        </MotiView>
        <MotiView
          from={textAnim.from}
          animate={expanded ? textAnim.animate : textAnim.from}
          transition={textAnim.transition}
          style={[
            styles.titleOverlay,
            { top: undefined } /* let Moti animate 'top' */,
          ]}
        >
          <Text
            style={styles.titleInImage}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {title}
          </Text>
        </MotiView>
      </Pressable>
    );
  }
);

export default MemoryCard;
