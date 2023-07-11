import { View, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";

const ScaleButton = ({ value, status, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View className="flex flex-column gap-x-0 gap-y-1 items-center">
        <View className="flex row-span-5 gap-x-10 gap-y-4">
          <Text className="text-black text-xs font-poppins-500">{value}</Text>
        </View>
        <View className="flex row-span-5 gap-x-10">
          <View
            className={`w-[15px] h-[15px] rounded-full ${
              status ? "bg-rmate-blue" : "bg-rmate-lightblue"
            }`}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ScaleButton;
