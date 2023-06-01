import { View, Text } from "react-native";
import React from "react";

const FoodHours = ({ hours }) => {
  return (
    <View className="w-full bg-rmate-blue">
      {hours.map((hour, index) => (
        <View key={index}>
          <Text>{hour.title}</Text>

          {hour.hours?.map((operationalHours, index) => (
            <Text key={index}>{operationalHours}</Text>
          ))}
        </View>
      ))}
    </View>
  );
};

export default FoodHours;
