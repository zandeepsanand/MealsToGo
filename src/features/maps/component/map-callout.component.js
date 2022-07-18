import React from "react";
import MapView from "react-native-maps";
import styled from "styled-components";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact/comapact-restaurant-info";



export const MapCallout= ({restaurant})=>(
   <CompactRestaurantInfo isMap restaurant={restaurant}/>
)