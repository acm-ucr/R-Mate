import { View, Text } from "react-native";
import React from "react";

const Title = ({ title }) => {
  return (
    <View className="w-full flex flex-row">
      <View className="bg-rmate-blue text-white rounded-xl text-base py-1.5 px-4 m-4">
        <Text className="text-white text-base font-poppins-500">{title}</Text>
      </View>
    </View>
  );
};

export default Title;
