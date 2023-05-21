import { View } from "react-native";
import React, { useEffect, createRef, useState } from "react";
import MapView from "react-native-maps";
import * as Location from "expo-location";

const MapScreen = () => {
  const mapRef = createRef();
  const [location, setLocation] = useState({});

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        const location = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Balanced,
          enableHighAccuracy: true,
          timeInterval: 5,
        });
        setLocation(location);
      }
    })();
  }, []);

  onMapReady = () => {
    mapRef.current.animateCamera({
      center: {
        latitude: location.coords.latitude || 33.97521,
        longitude: location.coords.longitude || -117.33255,
      },
    });

    mapRef.current.getCamera().then((cam) => {
      cam.zoom = 10;
    });

    mapRef.current.animateToRegion(
      {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      },
      2
    );
  };

  return (
    <View>
      <MapView
        ref={mapRef}
        userInterfaceStyle="dark"
        onMapReady={onMapReady}
        showsUserLocation={true}
        className="w-full h-full"
      />
    </View>
  );
};

export default MapScreen;
