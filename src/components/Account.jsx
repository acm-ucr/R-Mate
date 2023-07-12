import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import ProfileSVG from "../../assets/profilePIC.svg";
import BackButton from "./BackButton";
import { MaterialIcons } from "@expo/vector-icons";
const Account = () => {
  const navigator = useNavigation();
  const [name] = useState("Full Name");
  const [netid] = useState("net004");
  const [email] = useState("email@gmail.com");
  return (
    <SafeAreaView className="bg-rmate-lightblue">
      <View className="py-2 px-9 flex flex-row justify-start ">
        <BackButton
          navigator={navigator}
          text={
            <View>
              <MaterialIcons name="person-outline" size={40} color="black" />
            </View>
          }
        />
      </View>
      <View className="bg-rmate-lightblue w-full h-full flex items-center">
        <View className="flex items-center w-11/12">
          <View className="flex justify-center bg-rmate-white border-2 border-white rounded-3xl w-full p-4">
            <Text className="text-rmate-black font-poppins-700 text-2xl">
              Your Account
            </Text>
            <View className="flex justify-center items-center my-8">
              <ProfileSVG width={150} height={150} />
            </View>
            <Text className="text-rmate-black text-2xl font-poppins-600">
              {name}
            </Text>
            <Text className="text-rmate-blue font-poppins-500 pb-2">
              Student
            </Text>
            <View className="flex justify-center bg-rmate-lightblue border-2 border-white rounded-t-2xl">
              <Text className="text-rmate-black text-xl font-poppins-500 p-4">
                NetID: {netid}
              </Text>
            </View>
            <View className="flex justify-center bg-rmate-lightblue border-2 border-white rounded-b-2xl">
              <Text className="text-rmate-black text-xl font-poppins-500 p-4">
                Email: {email}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Account;
