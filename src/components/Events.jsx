import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Event from "./Event";

const Events = () => {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <View
      className={`w-full fixed bg-gray-400 bottom-10 mt-20 ${
        isExpand ? "h-fit" : "h-10"
      }`}
    >
      <TouchableOpacity
        onPress={() => {
          setIsExpand(!isExpand);
        }}
      >
        <Text>Events</Text>
      </TouchableOpacity>
      {isExpand && (
        <View className="flex items-center">
          <Event />
          <Event />
          <Event />
        </View>
      )}
    </View>
  );
};

export default Events;
