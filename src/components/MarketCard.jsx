import { Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const MarketCard = ({ market, navigator }) => {
  return (
    <TouchableOpacity
      className="bg-white my-2"
      onPress={() => {
        navigator.navigate("marketDetailPage", {
          navigator: navigator,
          market: market,
        });
      }}
    >
      <Text>{market.name}</Text>
      <Text>{market.address}</Text>
      {market.paying.map((pay, index) => {
        return <Text key={index}>{pay}</Text>;
      })}
    </TouchableOpacity>
  );
};

export default MarketCard;
