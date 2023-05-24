import { Text, TouchableOpacity } from "react-native";
import React from "react";

const BackButton = ({ text, navigator }) => {
  return (
    <TouchableOpacity
      className="flex flex-row"
      onPress={() => {
        navigator.goBack();
      }}
    >
      <Text className="bg-red-400 text-3xl">{text}</Text>
    </TouchableOpacity>
  );
};

export default BackButton;
