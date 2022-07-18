import React, { useEffect,useState } from "react";
import "./ignoreWarnings";

import { ThemeProvider } from "styled-components";

import * as firebase from "firebase/compat";





import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastructure/theme";

import { RestaurantContextProvider } from "./src/services/restaurant/restaurant.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { AppNavigator } from "./src/infrastructure/navigation/app.navigator";
import { Navigation } from "./src/infrastructure/navigation";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { AuthenticationContext, AuthenticationContextProvider } from "./src/services/authentication/authentication.context";


const firebaseConfig = {
  apiKey: "AIzaSyB91QoJB-MomkAvK1Hb_QZDYi690zM1c4E",
  authDomain: "mealstogo-d198c.firebaseapp.com",
  projectId: "mealstogo-d198c",
  storageBucket: "mealstogo-d198c.appspot.com",
  messagingSenderId: "836091379769",
  appId: "1:836091379769:web:eafb87ac93cdeadfde8de8",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}





export default function App() {

  

  const [OswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!OswaldLoaded || !latoLoaded) {
    return null;
  }
 
  return (
    <ThemeProvider theme={theme}>
      <AuthenticationContextProvider>
      
            <Navigation />
        
      </AuthenticationContextProvider>
    </ThemeProvider>
  );
}
