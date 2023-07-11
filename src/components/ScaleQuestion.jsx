import { View, Text } from "react-native";
import React from "react";
import ScaleButton from "./ScaleButton";
import { useState } from "react";

const ScaleQuestion = ({ index, question, options }) => {
  const [check, setCheck] = useState("");
  return (
    <View className="flex flex-row flex-wrap gap-x-3 gap-y-3 item-center bg-white m-2">
      <Text className="text-black text-sm font-poppins-500">{index}.</Text>
      <View className="flex flex-column">
        <Text className="text-black text-sm font-poppins-500">{question}</Text>
        <View className="flex flex-row">
          {options.map((option, index) => (
            <ScaleButton
              key={index}
              value={option}
              onPress={() => setCheck(option)}
              status={check == option}
            />
          ))}
        </View>
        <Text className="text-rmate-blue text-xs font-poppins-300">
          Selected {check}
        </Text>
      </View>
    </View>
  );
};

export default ScaleQuestion;
