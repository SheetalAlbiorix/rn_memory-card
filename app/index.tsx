import FadeInCard from "@/components/FadeInCard";
import FlipCard from "@/components/FlipCard";
import GestureCard from "@/components/GestureCard";
import RotateCard from "@/components/RotateCard";
import ScaleCard from "@/components/ScaleCard";
import SlideCard from "@/components/SlideCard";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Animation card definitions
const animationCards = [
  {
    key: "fade",
    label: "Fade In",
    instruction: "This card fades in when loads.",
    Component: FadeInCard,
    title: "Memories from Brooklyn",
    image: "https://picsum.photos/200",
  },
  {
    key: "scale",
    label: "Scale Animation",
    instruction: "This card scales up when it loads.",
    Component: ScaleCard,
    title: "Moments",
    image: "https://picsum.photos/300",
  },
  {
    key: "rotate",
    label: "Rotate",
    instruction: "It rotate when it loads.",
    Component: RotateCard,
    title: "Jungle Book",
    image: "https://picsum.photos/400",
  },
  {
    key: "slide",
    label: "Slide In",
    instruction: "This card slides in when renders.",
    Component: SlideCard,
    title: "Sliding",
    image: "https://picsum.photos/500",
  },
  {
    key: "flip",
    label: "Flip",
    instruction: "This card flips when it loads.",
    Component: FlipCard,
    title: "I Flip",
    image: "https://picsum.photos/300",
  },
  {
    key: "gesture",
    label: "Gesture Expand/Collapse",
    instruction: "Use a gesture to expand or collapse the card.",
    Component: GestureCard,
    title: "Swipe Up and Down",
    image: "https://picsum.photos/400",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#181A20",
    paddingTop: 64,
    paddingHorizontal: 16,
    width: "100%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
    width: "100%",
  },
  navButton: {
    padding: 8,
  },
  navButtonDisabled: {
    opacity: 0.3,
  },
  label: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 18,
    color: "#F2F6FF",
    letterSpacing: 0.5,
    flex: 1,
    textAlign: "center",
  },
  instructions: {
    marginBottom: 24,
    color: "#B0B8C1",
    fontSize: 16,
    textAlign: "center",
    maxWidth: 340,
    fontWeight: "500",
    letterSpacing: 0.1,
  },
  cardContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 0.18,
    shadowRadius: 16,
    elevation: 8,
    marginBottom: 32,
  },
});

const Home = () => {
  const [index, setIndex] = useState(0);
  const { Component, title, image, label, instruction } = animationCards[index];

  return (
    <View style={styles.container}>
      {/* Header with navigation */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => setIndex((i) => Math.max(i - 1, 0))}
          disabled={index === 0}
          style={[styles.navButton, index === 0 && styles.navButtonDisabled]}
        >
          <Ionicons name="chevron-back" size={32} color="#7FB3FF" />
        </TouchableOpacity>
        <Text style={styles.label} numberOfLines={1}>
          {label}
        </Text>
        <TouchableOpacity
          onPress={() =>
            setIndex((i) => Math.min(i + 1, animationCards.length - 1))
          }
          disabled={index === animationCards.length - 1}
          style={[
            styles.navButton,
            index === animationCards.length - 1 && styles.navButtonDisabled,
          ]}
        >
          <Ionicons name="chevron-forward" size={32} color="#7FB3FF" />
        </TouchableOpacity>
      </View>

      {/* Instructions */}
      <Text style={styles.instructions}>{instruction}</Text>

      {/* Animated Card Container */}
      <View style={styles.cardContainer}>
        <Component title={title} image={image} />
      </View>
    </View>
  );
};

export default Home;
