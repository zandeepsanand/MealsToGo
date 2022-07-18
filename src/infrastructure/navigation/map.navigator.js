import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MapsRestaurent } from "../../features/maps/screens/map.screen";
import { DummyScreen } from "../../features/maps/screens/dummy.screen";
const MapStack = createNativeStackNavigator();

export const MapsNavigator = () => {
  return (
    <MapStack.Navigator
      headerMode="screen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <MapStack.Screen name="Main" component={DummyScreen} />
    </MapStack.Navigator>
  );
};
