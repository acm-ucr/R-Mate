import { View, Text } from "react-native";
import React from "react";
import { useContext } from "react";
import RMateContext from "./RMateContext";

const Welcome = () => {
  const { user } = useContext(RMateContext);
  return (
    <View className="w-full">
      <Text className="bg-rmate-light gray text-rmate-blue text-3xl pt-4  pl-4 pr-4 font-poppins-600">
        Welcome,
      </Text>
      <Text className="bg-rmate-light gray text-rmate-yellow text-3xl pt-1 pb-2 pl-4 pr-4 font-poppins-600">
        {user?.name}
      </Text>
    </View>
  );
};

export default Welcome;
