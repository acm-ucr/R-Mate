import { View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import FoodCard from "./FoodCard";
import DiningData from "./data/DiningData";
import BackButton from "./BackButton";
import { ScrollView } from "react-native";
const Dining = () => {
  const navigator = useNavigation();
  return (
    <View className="flex flex-col justify-center items-center">
      <BackButton navigator={navigator} text="back Dining" />
      <ScrollView className="w-11/12">
        {DiningData.map((Dining, index) => {
          return (
            <FoodCard
              key={index}
              place={Dining}
              navigator={navigator}
              foodType="Dining"
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Dining;
