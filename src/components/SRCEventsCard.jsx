import { View, Text } from "react-native";
import React from "react";

const SRCEventsCard = ({ title, time, location }) => {
  return (
    <View className="w-11/12 bg-rmate-white rounded-xl p-2 mt-2 self-center">
      <Text className="text-rmate-blue font-poppins-500 mb-2 text-lg">
        {title}
      </Text>
      <Text className="text-rmate-black font-poppins-400 text-base">
        Time: {time}
      </Text>
      <Text className="text-rmate-black font-poppins-400 text-base">
        Location: {location}
      </Text>
    </View>
  );
};

export default SRCEventsCard;
