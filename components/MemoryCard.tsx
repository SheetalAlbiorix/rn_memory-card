import { useReducedMotionDuration } from "@/hooks/useReducedMotionDuration";
import { ANIMATION } from "@/styles/animation";
import styles from "@/styles/MemoryCard.styles";
import { BlurView } from "expo-blur";
import { MotiView } from "moti";
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
          animate={{ height: expanded ? expandedHeight : collapsedHeight }}
          transition={{ type: "timing", duration }}
          style={styles.container}
        >
          <View style={styles.imageWrapper}>
            <View
              style={[styles.imageFadeWrap, { justifyContent: "flex-end" }]}
            >
              {image && (
                <>
                  <Image
                    source={{ uri: image }}
                    style={styles.image}
                    resizeMode="cover"
                  />
                  <MotiView
                    style={styles.blurOverlay}
                    from={{ opacity: expanded ? 0 : 1 }}
                    animate={{ opacity: expanded ? 0 : 1 }}
                    transition={{ type: "timing", duration }}
                  >
                    <BlurView
                      intensity={60}
                      tint="light"
                      style={styles.blurFill}
                    />
                  </MotiView>
                </>
              )}
              <MotiView
                style={[styles.titleOverlay]}
                animate={{
                  scale: expanded ? 1.25 : 1,
                  opacity: 1,
                  shadowOpacity: expanded ? 0.22 : 0.12,
                }}
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
