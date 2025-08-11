import React, { memo } from "react";
import {
  AccessibilityProps,
  AccessibilityRole,
  Image,
  Pressable,
  Text,
} from "react-native";
import styles from "./MemoryCard.styles";

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
    // Animation logic will be added in Big Plan 2
    // For now, just render the static card
    return (
      <Pressable
        style={[styles.container, { height: collapsedHeight }]}
        accessibilityRole={accessibilityRole}
        accessibilityLabel={accessibilityLabel || title}
        {...rest}
      >
        {image && (
          <Image
            source={{ uri: image }}
            style={styles.image}
            resizeMode="cover"
          />
        )}
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    );
  }
);

export default MemoryCard;
