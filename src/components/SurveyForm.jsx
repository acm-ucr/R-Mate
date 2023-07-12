import { View, Text, ScrollView, Alert, TouchableOpacity } from "react-native";
import React from "react";
import BackButton from "./BackButton";
import RadioQuestion from "./RadioQuestion";
import ScaleQuestion from "./ScaleQuestion";
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
          ) : question.type == "scale" ? (
            <ScaleQuestion
              key={index}
              index={index + 1}
              question={question.question}
              options={question.options}
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
        <View className="flex items-end">
          <TouchableOpacity
            className="flex bg-rmate-yellow square rounded w-24 h-8"
            onPress={() => Alert.alert("Submitted!")}
          >
            <Text className="text-rmate-white font-poppins-600 ml-5 py-1.5">
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SurveyForm;
