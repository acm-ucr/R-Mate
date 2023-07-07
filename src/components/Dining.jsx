import { View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import FoodCard from "./FoodCard";
import DiningData from "./data/DiningData";
import BackButton from "./BackButton";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const Dining = () => {
  const navigator = useNavigation();
  return (
    <SafeAreaView className="flex flex-col justify-center items-center">
      <View className="flex flex-col w-10/12">
        <BackButton navigator={navigator} text="Dining" />
        <ScrollView className="w-12/12">
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
    </SafeAreaView>
  );
};

export default Dining;
