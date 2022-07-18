import styled from "styled-components/native";
import { Button , TextInput } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { Text, View } from "react-native";



export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/pic2.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
 
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[5]};
  margin-top: ${(props) => props.theme.space[2]};
  border-radius:50px
`;

export const AuthButton = styled(Button).attrs({
  color: "pink",
  
  
})`
  padding: ${(props) => props.theme.space[2]};
  
`;
export const AuthInput = styled(TextInput)`
  width: 300px;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const Title = styled(Text)`
  font-size: 30px;
`;

export const AnimationWrapper=styled(View)`
width:50%;
position:absolute;
top:80px;
height:20%;
padding: ${(props)=>props.theme.space[2]};
`