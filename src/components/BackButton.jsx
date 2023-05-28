import { Text, TouchableOpacity } from "react-native";
import React from "react";
import BackArrow from "../../assets/arrow.svg";

const BackButton = ({ text, navigator }) => {
  return (
    <TouchableOpacity
      className="flex flex-row items-center"
      onPress={() => {
        navigator.goBack();
      }}
    >
      <BackArrow />
      <Text className="text-xl font-poppins-600 ml-3 content-center">
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default BackButton;
