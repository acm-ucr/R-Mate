import { View } from "react-native";
import React from "react";
import SurveyCard from "./SurveyCard";
import SurveyData from "./data/SurveyData";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
const SurveyPage = () => {
  const navigator = useNavigation();
  return (
    <View className="w-full flex flex-col items-center justify-center">
      <ScrollView className="w-11/12">
        {SurveyData.map((survey, index) => (
          <SurveyCard
            title={survey.title}
            due={survey.due}
            key={index}
            onPress={() => {
              navigator.navigate("surveyForm", {
                navigator: navigator,
                survey: survey,
              });
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default SurveyPage;
