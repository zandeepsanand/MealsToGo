import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CardStyleInterpolators } from "@react-navigation/stack";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavouritesScreen } from "../../features/favourites/favourites.screen";
import { MapsRestaurent } from "../../features/maps/screens/map.screen";
const Stack=createNativeStackNavigator();
export const SettingsNavigator=()=>{
return(
    <Stack.Navigator  headerMode="screen"
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      headerShown: false,
      }}>
           <Stack.Screen
          name="Main"
          component={SettingsScreen}
        />
         <Stack.Screen
          name="Favourites"
          component={FavouritesScreen}
        />
         <Stack.Screen
          name="Maps"
          component={MapsRestaurent}
        />
        </Stack.Navigator>
)

}