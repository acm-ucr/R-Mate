import { View, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";

const RadioButton = ({ value, status, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View className="flex flex-row items-center">
        <View
          className={`w-[15px] h-[15px] border-2 rounded-full ${
            status ? "bg-rmate-blue" : "bg-white"
          }`}
        />
        <Text>{value}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RadioButton;
