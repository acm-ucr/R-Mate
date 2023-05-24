import { Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const SRCButton = ({ text, navigator, directTo }) => {
  return (
    <TouchableOpacity
      className="mt-3 bg-rmate-midblue rounded-lg w-full flex flex-row items-center justify-between px-3"
      onPress={() => {
        navigator.navigate(directTo);
      }}
    >
      <Text className="text-rmate-white font-poppins-600 text-lg p-2 ">
        {text}
      </Text>
      <AntDesign
        className="text-rmate-white font-poppins-600 text-lg p-2"
        name="right"
        size={24}
        color="white"
      />
    </TouchableOpacity>
  );
};
export default SRCButton;
