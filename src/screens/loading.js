import { View } from "react-native";
import React from "react";
import UCRLogo from "../../assets/UCRLogo.svg";

const LoadingScreen = () => {
  return (
    <View className="h-full w-full bg-rmate-blue flex justify-center items-center">
      <UCRLogo width={100} height={100} />
    </View>
  );
};

export default LoadingScreen;
