import React from "react";


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import { Text, View } from "react-native";
import { AccountScreen } from "../../features/account/screen/account.screen";
import { LoginScreen } from "../../features/account/screen/login.screen";
import { RegisterScreen } from "../../features/account/screen/register.screen";
const Stack=createNativeStackNavigator();





export const AccountNavigator=()=>{
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
          }}>
        <Stack.Screen
          name="Main"
          component={AccountScreen}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
        />
      </Stack.Navigator>

    )
}