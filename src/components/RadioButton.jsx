import { View, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";

const RadioButton = ({ value, status, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View className="flex flex-row gap-x-3 items-center">
        <View
          className={`w-[15px] h-[15px] rounded-full ${
            status ? "bg-rmate-blue" : "bg-rmate-lightblue"
          }`}
        />
        <Text className="text-black text-xs font-poppins-500">{value}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RadioButton;
