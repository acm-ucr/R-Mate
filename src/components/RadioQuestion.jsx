import { View, Text } from "react-native";
import React from "react";
import RadioButton from "./RadioButton";
import { useState } from "react";

const RadioQuestion = ({ index, question, options }) => {
  const [check, setCheck] = useState("");
  return (
    <View className="flex flex-row gap-x-3 item-center bg-white m-2">
      <Text className="text-black text-sm font-poppins-500">{index}.</Text>
      <View className="flex flex-column">
        <Text className="text-black text-sm font-poppins-500">{question}</Text>
        {options.map((option, index) => (
          <RadioButton
            key={index}
            value={option}
            onPress={() => setCheck(option)}
            status={check == option}
          />
        ))}
        <Text className="text-rmate-blue text-xs font-poppins-300">
          Selected {check}
        </Text>
      </View>
    </View>
  );
};

export default RadioQuestion;
