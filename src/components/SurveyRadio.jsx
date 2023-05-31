import { View, Text } from "react-native";
import React from "react";
import { RadioButton } from "react-native-paper";

const SurveyRadio = ({ questionNum, question, options }) => {
  const [checked, setChecked] = React.useState("");
  return (
    <View>
      <View>
        <Text>questionNum</Text>
        <Text>question</Text>
        {options.map((option, index) => (
          <RadioButton
            key={index}
            value={option}
            status={checked === option ? "checked" : "unchecked"}
            onPress={() => setChecked("option")}
          />
        ))}
      </View>
    </View>
  );
};

export default SurveyRadio;
