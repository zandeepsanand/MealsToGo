import React from "react";
import { Button } from "react-native-paper";
import Lottie from "lottie-react-native";

import { Spacer } from "../../../components/spacer/spacer.compoent";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AnimationWrapper,
  AuthButton,
  Title
} from "../component/account.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
    <AccountCover />
    <AnimationWrapper>
    <Lottie
    key="animation"
    autoPlay
    loop
    resizeMode="cover"
    source={require("../../../../assets/66438-ice-cream-lot.json")}
    
    />
    </AnimationWrapper>
    <Title>Meals To Go</Title>
    <AccountContainer>
      <AuthButton
        icon="food-outline"
        mode="contained"
        onPress={() => navigation.navigate("Login")}
      >
        Login
      </AuthButton>
      <Spacer size="large">
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
         
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AuthButton>
        
      </Spacer>
    </AccountContainer>
  </AccountBackground>
  );
};
