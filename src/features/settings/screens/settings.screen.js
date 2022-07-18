import React ,{useContext} from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { SafeArea } from "../../../components/utility/safearea.component";
import {  View  } from "react-native";
import { Text } from "../../../components/typography/text.component";
import { Avatar, Button } from "react-native-paper";
import styled from "styled-components";
import { List } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.compoent";

const AvatarContainer=styled(View)`
padding:${(props)=>props.theme.space[4]}
align-items: center;
`

 const ListContainer =styled(View)`
 padding:${(props)=>props.theme.space[4]}
 
 `
export  const SettingsScreen = ({navigation }) => {
    const { onLogout, user} = useContext(AuthenticationContext);

    return (
      <SafeArea>
        <AvatarContainer><Avatar.Icon size={180} icon="face-man" backgroundColor="#2182BD" />
        <Spacer position="top" size="large">
          <Text variant="caption">{user.email}</Text>
        </Spacer>
        </AvatarContainer>
       
         <ListContainer>
         <List.Section>
        <List.Item
          style={{ padding: 16 }}
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="#FF4500" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
          <List.Item
          style={{ padding: 16 }}
          title="Maps"
          left={(props) => <List.Icon {...props} color="#FF4500" icon="map" />}
          onPress={() => navigation.navigate("Maps")}
        />
        <List.Item
          style={{ padding: 16 }}
          title="Logout"
          left={(props) => <List.Icon {...props} color="#FF4500" icon="door" />}
          onPress={onLogout}
        />
       
      </List.Section>
      </ListContainer>
      </SafeArea>
    );
  };