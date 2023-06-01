import { View, Text } from "react-native";
import React from "react";

const FoodHours = ({ hours }) => {
  return (
    <View className="w-full bg-rmate-blue">
      {hours.map((hour, index) => (
        <View key={index}>
          <Text>{hour.title}</Text>
          {hour.days.map((day, index) => (
            <View className="flex flex-row justify-between py-1" key={index}>
              <Text className="text-rmate-white font-poppins-600">{day}</Text>
              <Text className="text-rmate-white font-poppins-600">
                {hour.time[index]}
              </Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default FoodHours;
