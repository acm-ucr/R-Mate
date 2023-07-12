import { View, Text, TextInput } from "react-native";
import React from "react";
import { useState } from "react";

const ShortResponseQuestion = ({ index, question }) => {
  const [check, setCheck] = useState("");
  return (
    <View className="flex flex-row gap-x-3 item-center bg-white m-2">
      <Text className="text-black text-sm font-poppins-500">{index}.</Text>
      <View className="flex flex-column">
        <Text className="text-black text-sm font-poppins-500">{question}</Text>
        <TextInput
          className="w-80 h-40 border"
          multiline
          placeholder="Type your response..."
          onChangeText={(newText) => setCheck("")}
        />
        <Text className="text-rmate-blue text-xs font-poppins-300">
          {check}
        </Text>
      </View>
    </View>
  );
};

export default ShortResponseQuestion;
