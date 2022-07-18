import React, {useState, useContext , } from "react";
import { Text } from "react-native";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AnimationWrapper,
  AuthButton,
  Title,
  AuthInput,
  ErrorContainer
} from "../component/account.styles";
import Lottie from "lottie-react-native";
    import { ActivityIndicator, Colors } from "react-native-paper";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { TextInput } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.compoent";
import styled from "styled-components";



export const LoginScreen=({ navigation })=>{
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);
   

    return(
    <AccountBackground>
    <AccountCover/>
    <AnimationWrapper>
<Lottie
 key="animation"
 autoPlay
 loop
 resizeMode="cover"
 source={require("../../../../assets/hot.json")}
/>
    </AnimationWrapper>
    <AccountContainer>
    <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size="large"></Spacer>
        <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            secure
            onChangeText={(p) => setPassword(p)}
          />
        
        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size="large">
        {!isLoading ? (
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={() => onLogin(email, password)}
            >
              Login
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          )}
        </Spacer>
       
    </AccountContainer>
    <Spacer size="large">
    <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
       </Spacer>
    

    </AccountBackground>)
}