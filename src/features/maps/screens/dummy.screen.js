import React from "react";
import Lottie from "lottie-react-native";
import { AccountBackground, AccountContainer, AccountCover, AnimationWrapper, AuthButton, ErrorBackground, MapWrapper } from "../../account/component/account.styles";
import { Spacer } from "../../../components/spacer/spacer.compoent";
import { Text } from "../../../components/typography/text.component";

export const  DummyScreen=({navigation})=>{
return( <ErrorBackground>
    <AccountCover/>
    <MapWrapper>
    <Lottie
 key="animation"
 autoPlay
 loop
 resizeMode="cover"
 source={require("../../../../assets/91824-map-animation-lottie-italy.json")}

/>
</MapWrapper>
<AccountContainer>
<Spacer position="left" size="large">
          <Text variant="error">Please use expo to view map Functions </Text>
          <Text variant="hint">Google api needs a billing account to provide api </Text>

        </Spacer>
</AccountContainer>
<AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>

    
</ErrorBackground>)

}