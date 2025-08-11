import MemoryCard from "@/components/MemoryCard";
import { memoryCardsData } from "@/constants/memoryCardsData";
import { theme } from "@/utils/theme";
import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.background,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        {memoryCardsData.map((item) => (
          <View key={item.id} style={{ width: "92%", alignSelf: "center" }}>
            <MemoryCard
              title={item.title}
              image={item.image}
              animationKey={
                item.animation as "fade" | "slide" | "scale" | "rotate"
              }
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
