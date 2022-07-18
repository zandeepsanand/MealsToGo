import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "@expo/vector-icons/Ionicons";

import { RestaurantsNavigator } from "./restaurant.navigator";


import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { RestaurantContextProvider } from "../../services/restaurant/restaurant.context";

import { SettingsNavigator } from "./settings.navigator";
import { MapsNavigator } from "./map.navigator";

const Tab = createBottomTabNavigator();
const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};
const TAB_ICON = {
  Restaurant: "md-restaurant",
  Maps: "md-map",
  Settings: "md-settings",
};

export const AppNavigator = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <Tab.Navigator
            screenOptions={createScreenOptions}
            BottomTabNavigationOption={{
              activeTintColor: "orange",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen
              options={{ headerShown: false }}
              name="Restaurant"
              component={RestaurantsNavigator}
            />
            <Tab.Screen
              options={{ headerShown: false }}
              name="Maps"
              component={MapsNavigator}
            />
            <Tab.Screen
              options={{ headerShown: false }}
              name="Settings"
              component={SettingsNavigator}
            />
          </Tab.Navigator>
        </RestaurantContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
