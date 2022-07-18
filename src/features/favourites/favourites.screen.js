import React, { useContext } from "react";
import { TouchableOpacity , Text} from "react-native";
import styled from "styled-components";
import { Spacer } from "../../components/spacer/spacer.compoent";
import { SafeArea } from "../../components/utility/safearea.component";
import { FavouritesContext } from "../../services/favourites/favourites.context";
import { RestaurantInfoCard } from "../restaurant/component/restaurant-info-card";
import { RestaurantList } from "../restaurant/component/restaurant-list";

const NoFavouritesArea =styled(SafeArea)`
align-items: center;
justify-content: center;
`

export const FavouritesScreen = ({navigation}) =>{
    const { favourites } = useContext(FavouritesContext);
    return favourites.length ? (
        <SafeArea>
 <RestaurantList
        data={favourites}
        renderItem={({ item }) => {
          return (
          
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
        </SafeArea>
    ) :   <NoFavouritesArea>
    <Text center>No favourites yet</Text>
  </NoFavouritesArea>
}