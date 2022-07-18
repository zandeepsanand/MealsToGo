import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MapsRestaurent } from "../../features/maps/screens/map.screen";
const MapStack = createNativeStackNavigator();

export const MapsNavigator = () => {
  return (
    <MapStack.Navigator
      headerMode="screen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <MapStack.Screen name="Main" component={MapsRestaurent} />
    </MapStack.Navigator>
  );
};
