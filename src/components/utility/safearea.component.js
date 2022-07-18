import React from "react";
import styled from "styled-components";
import {SafeAreaView, StatusBar } from "react-native";

export const SafeArea = styled(SafeAreaView)`
flex:1;
margin-top: ${StatusBar.currentHeight}px;
`;