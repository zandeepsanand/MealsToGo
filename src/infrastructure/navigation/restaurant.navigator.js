import React from "react";
import styled from "styled-components";
import { Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RestaurantsScreen } from "../../features/restaurant/screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../features/restaurant/screens/restaurantDetails.screen";
const RestaurantStack = createNativeStackNavigator();

const Opacity = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -40px;
`;

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RestaurantStack.Screen name="Rest" component={RestaurantsScreen} />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
