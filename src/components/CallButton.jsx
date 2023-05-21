import { View, Text } from "react-native";
import React from "react";

const CallButton = () => {
  return (
    <View className="w-screen flex items-center row-center">
      <View className="bg-rmate-blue rounded-2xl p-4 w-80 mb-2">
        <Text className="text-lg text-center text-white font-bold">
          Call (951) 827-5222
        </Text>
      </View>
      <View className="bg-white border-2 border-rmate-blue rounded-3xl p-1.5 w-80">
        <Text className="text-base text-center text-black font-bold">
          Cancel
        </Text>
      </View>
    </View>
  );
};

export default CallButton;
