import React, { useContext } from "react";
import styled from "styled-components";
import  { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { FavouritesContext } from "../../services/favourites/favourites.context";

const FavouritesButton=styled(TouchableOpacity)`
position:absolute;
top:25px;
width:25px;
z-index:9;
right:20px
`;

export const Favourites =({restaurant})=>{

const { favourites , addToFavourites , removeFromFavourites } = useContext(FavouritesContext);
const isFavourites =favourites.find((r)=>r.placeId===restaurant.placeId);
    return(
<FavouritesButton onPress={()=>!isFavourites ? addToFavourites(restaurant) : removeFromFavourites(restaurant)}>
    <AntDesign
    name={
        isFavourites ? "heart" : "hearto"
    }
    size={24}
    color={isFavourites ? "red" : "white"}/>
</FavouritesButton>
        )
}