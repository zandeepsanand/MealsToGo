import React from "react";
import { ScrollView, Text } from "react-native";
import styled from "styled-components";
import { Spacer } from "../spacer/spacer.compoent";
import { TouchableOpacity } from "react-native";
import { CompactRestaurantInfo } from "../restaurant/compact/comapact-restaurant-info";

const FavouriteWrapper = styled.View`
  padding: 10px;
`;
export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouriteWrapper>
    <Spacer variant="left.large">
      <Text variant="caption">Favourites</Text>
    </Spacer>

    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {favourites.map((restaurant) => {
        const key = restaurant.name;
        return (
          <Spacer key={key} position="left" size="medium">
            <TouchableOpacity
              onPress={() =>
                onNavigate("RestaurantDetail", {
                  restaurant,
                })
              }
            >
              <CompactRestaurantInfo restaurant={restaurant} />
            </TouchableOpacity>
          </Spacer>
        );
      })}
    </ScrollView>
  </FavouriteWrapper>
  );
};
