import React from "react";
import SurveyForm from "../components/SurveyForm";
import SurveyPage from "../components/SurveyPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const screenOptions = {
  headerShown: false,
};
const SurveyStack = createNativeStackNavigator();
const SurveysScreen = () => {
  return (
    <SurveyStack.Navigator>
      <SurveyStack.Screen
        name="surveyPage"
        component={SurveyPage}
        options={screenOptions}
      />
      <SurveyStack.Screen
        name="surveyForm"
        component={SurveyForm}
        options={screenOptions}
      />
    </SurveyStack.Navigator>
  );
};

export default SurveysScreen;
