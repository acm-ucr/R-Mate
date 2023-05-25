import { View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MarketCard from "./MarketCard";
import marketsData from "./data/MarketsData";
import BackButton from "./BackButton";
import { ScrollView } from "react-native";
const Market = () => {
  const navigator = useNavigation();
  return (
    <View className="flex flex-col justify-center items-center">
      <BackButton navigator={navigator} text="back Market" />
      <ScrollView className="w-11/12">
        {marketsData.map((market, index) => {
          return (
            <MarketCard key={index} market={market} navigator={navigator} />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Market;
