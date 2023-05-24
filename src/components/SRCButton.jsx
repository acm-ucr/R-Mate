import { View, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const SRCButton = () => {
  return (
    <View className="w-full flex flex-row">
      <TouchableOpacity>
        <View className="bg-rmate-midblue rounded-xl">
          <Text className="text-rmate-white font-poppins-400 text-xl p-2">
            <Text>Today&apos;s Schedule </Text>
            <AntDesign name="right" size={24} color="white" />
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default SRCButton;
