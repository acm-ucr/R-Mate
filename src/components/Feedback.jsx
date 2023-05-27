import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { React, useState } from "react";
import FeedbackSVG from "../../assets/feedback.svg";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");

  const handleTyping = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log("Feedback: " + feedback);
  };

  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View className="flex-1">
        <SafeAreaView className="bg-rmate-lightblue w-full h-full">
          <View className="p-3">
            <TouchableOpacity
              className="flex flex-row items-center"
              onPress={() => navigation.navigate("Profile")}
            >
              <Feather name="arrow-left" size={24} color="black" />
              <FeedbackSVG />
            </TouchableOpacity>
          </View>
          <View className="flex flex-column w-full h-full px-5 mt-4">
            <View className="flex flex-column">
              <Text className="text-black text-lg font-poppins-700">
                Feel free to leave us some feedback!
              </Text>
              <Text className="text-black text- font-poppins-400 mt-4">
                The R&apos;Mate Team is always striving to improve and we
                appreciate any and all feedback!
              </Text>
            </View>
            <View className="flex flex-column w-full h-[60vh] mt-4">
              <TextInput
                onChange={handleTyping}
                multiline
                placeholder="Feedback"
                placeholderTextColor="#6F6D6D"
                className="flex-1 font-poppins-400 h-400 bg-rmate-white rounded-lg p-3"
              />
              <Pressable
                style={{ alignSelf: "flex-end" }}
                onPress={handleSubmit}
                className="mt-4"
              >
                <View className="bg-rmate-yellow rounded-full px-4 py-2 w-fit">
                  <Text className="font-poppins-700 text-sm uppercase text-black">
                    Submit
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Feedback;
