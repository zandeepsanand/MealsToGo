import React from "react";
import styled from "styled-components";
import {  Image ,  View } from "react-native";
import { Text } from "../../../components/typography/text.component";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import  star  from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../../src/components/spacer/spacer.compoent";
import { Favourites } from "../../../components/favourites/favourites.component";

const Title = styled.Text`
  color: ${(props) => props.theme.colors.ui.error};
  font-size: ${(props) => props.theme.fontSizes.body};
  font-family: ${(props) => props.theme.fonts.body};
`;
const RestaurantCard = styled(Card)`
  background-color: white;
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom :  ${(props) => props.theme.space[3]}
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
const Rating = styled.View`
flex-direction:row;
padding-top: ${(props) => props.theme.space[1]};
padding-bottom: ${(props) => props.theme.space[1]} 
`;
const Section = styled.View`
flex-direction:row;
align-items:center;
`;
const SectionEnd = styled.View`
flex:1;
flex-direction:row;
justify-content:flex-end;
`;
 const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;



export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    ],
    address = "Oruvathilkotta",
    isOpenNow = true,
    rating = 4.2,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray= Array.from(new Array(Math.floor(rating)));
  

  return (
    <RestaurantCard elevation={5}>
      <Favourites restaurant={restaurant}/>
    <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
    <Info>
      <Text variant="label">{name}</Text>
      <Section>
        <Rating>
          {ratingArray.map((_, i) => (
            <SvgXml
              key={`star-${placeId}-${i}`}
              xml={star}
              width={20}
              height={20}
            />
          ))}
        </Rating>
        <SectionEnd>
        {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
          <Spacer position="left" size="large">
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
          </Spacer>
          <Spacer position="left" size="large">
            <Icon source={{ uri: icon }} />
          </Spacer>
        </SectionEnd>
      </Section>
      <Address>{address}</Address>
    </Info>
  </RestaurantCard>
  );
};
