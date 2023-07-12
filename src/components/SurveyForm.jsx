import { View, Text, ScrollView } from "react-native";
import React from "react";
import BackButton from "./BackButton";
import RadioQuestion from "./RadioQuestion";
import ShortResponseQuestion from "./ShortResponseQuestion";

const SurveyForm = ({ route }) => {
  return (
    <View className="flex flex-col items-center">
      <BackButton
        navigator={route.params.navigator}
        text={`back ${route.params.survey.title}`}
      />
      <ScrollView className="w-11/12">
        {route.params.survey.questions.map((question, index) =>
          question.type == "radio" ? (
            <RadioQuestion
              key={index}
              index={index + 1}
              question={question.question}
              options={question.options}
            />
          ) : question.type == "short response" ? (
            <ShortResponseQuestion
              key={index}
              index={index + 1}
              question={question.question}
            />
          ) : (
            <Text key={index}> question.type</Text>
          )
        )}
      </ScrollView>
    </View>
  );
};

export default SurveyForm;
