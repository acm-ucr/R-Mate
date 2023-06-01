import { View, Text } from "react-native";
import React from "react";
import RadioButton from "./RadioButton";
import { useState } from "react";

const RadioQuestion = ({ index, question, options }) => {
  const [check, setCheck] = useState("");
  return (
    <View className="bg-white m-2">
      <Text>
        {index}
        {question}
      </Text>
      {options.map((option, index) => (
        <RadioButton
          key={index}
          value={option}
          onPress={() => setCheck(option)}
          status={check == option}
        />
      ))}
    </View>
  );
};

export default RadioQuestion;
