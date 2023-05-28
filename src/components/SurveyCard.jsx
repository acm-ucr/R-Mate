import { Text, TouchableOpacity } from "react-native";
import React from "react";

const SurveyCard = ({ title, onPress, due }) => {
  return (
    <TouchableOpacity onPress={onPress} className="bg-white my-2">
      <Text>{title}</Text>
      <Text>{due.toString()}</Text>
    </TouchableOpacity>
  );
};

export default SurveyCard;
