import { View, Text, Linking, ScrollView } from "react-native";
import React from "react";
import BackButton from "./BackButton";
import { TouchableOpacity } from "react-native";
import { useCallback } from "react";
import { Image } from "react-native";
import FoodHours from "./FoodHours";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const FoodDetailPage = ({ route }) => {
  const handlePress = useCallback(async (url) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  });
  return (
    <ScrollView contentContainerStyle="flex-1">
      <BackButton
        navigator={route.params.navigator}
        text={`back ${route.params.foodType}`}
      />
      <Image source={route.params.place.picture} className="w-screen h-fit" />

      <View className="p-4">
        <View className="flex flex-row flex-wrap pb-2 gap-y-2">
          {route.params.place.paying.map((pay, index) => {
            return (
              <View
                className="bg-rmate-blue rounded-full py-1 px-2.5 mr-1"
                key={index}
              >
                <Text className="text-xs font-poppins-300 text-white">
                  {pay}
                </Text>
              </View>
            );
          })}
          <TouchableOpacity className="border border - [#44B300] rounded-full px-2.5">
            <Text className="text-xs font-poppins-300 text-[#44B300] mt-1">
              Open
            </Text>
          </TouchableOpacity>
        </View>

        <Text className="text-xl text-rmate-blue font-bold mt-2 pb-1">
          Address
        </Text>
        <ScrollView style={{ flex: 1 }} horizontal>
          <View className="overflow-scroll flex flex-row">
            <Text className="font-poppins-300-bold mt-1">
              {route.params.place.address}
            </Text>
            <TouchableOpacity className="bg-rmate-yellow rounded-full py-1 px-2.5 ml-3">
              <Text className="text-xs font-poppins-300 text-white">
                View on Map
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <Text className="text-xl text-rmate-blue font-bold mt-2 pb-1">
          Hours
        </Text>
        <FoodHours hours={route.params.place.hours} />

        <Text className="text-xl text-rmate-blue font-bold mt-2 pb-1">
          Contacts
        </Text>
        <View className="flex flex-row">
          <Feather name="phone" size={18} color="black" />
          <Text className="font-poppins-400 pb-1 pl-2">
            {route.params.place.phoneNumber}
          </Text>
        </View>

        <View className="flex flex-row">
          <SimpleLineIcons name="globe" size={18} color="black" />

          {route.params.place.website && (
            <TouchableOpacity
              onPress={() => handlePress(route.params.place.website)}
            >
              <Text className="font-poppins-400 pb-1 pl-2">View website</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default FoodDetailPage;
