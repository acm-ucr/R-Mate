import { View, Text, Linking } from "react-native";
import React from "react";
import BackButton from "./BackButton";
import { TouchableOpacity } from "react-native";
import { useCallback } from "react";

const MarketDetailPage = ({ route }) => {
  const handlePress = useCallback(async (url) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  });
  return (
    <View>
      <BackButton
        navigator={route.params.navigator}
        text={`back ${route.params.market.location_name}`}
      />
      {route.params.market.paying.map((pay, index) => {
        return <Text key={index}>{pay}</Text>;
      })}
      <Text>{route.params.market.address}</Text>
      {route.params.market.hours.map((hour, index) => {
        return (
          <View key={index}>
            <Text>{hour.split("/")[0]}</Text>
            <Text>{hour.split("/")[1]}</Text>
          </View>
        );
      })}
      <Text>{route.params.market.phoneNumber}</Text>
      <TouchableOpacity
        onPress={() => handlePress(route.params.market.website)}
      >
        <Text>View website</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MarketDetailPage;
