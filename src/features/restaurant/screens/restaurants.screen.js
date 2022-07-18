import React, { useContext , useState } from "react";

import { FlatList,TouchableOpacity } from "react-native";

import styled from "styled-components";
import { ActivityIndicator , Colors } from "react-native-paper";
import { Search } from "../component/search.component";
import { SafeArea } from "../../../components/utility/safearea.component";

import { RestaurantInfoCard } from "../component/restaurant-info-card";
import { RestaurantContext } from "../../../services/restaurant/restaurant.context";
import { FavouritesContextProvider , FavouritesContext} from "../../../services/favourites/favourites.context";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { FadeInView } from "../../../components/animation/fade.animation";
import { Spacer } from "../../../components/spacer/spacer.compoent";
import { Text } from "../../../components/typography/text.component";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantList } from "../component/restaurant-list";


// const android = Platform.OS === "android";


// const RestaurantListContainer = styled.View`
// flex:1;
// padding:16px;
// background-color:white;
// `;
const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = ({navigation}) => {
  const { error: locationError } = useContext(LocationContext);
  const { restaurants, isLoading } = useContext(RestaurantContext);
  const  { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  const hasError =  !!locationError;

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      {hasError && (
        <Spacer position="left" size="large">
          <Text variant="error">Something went wrong retrieving the data</Text>
        </Spacer>
      )}
      {!hasError && (
        <RestaurantList
          data={restaurants}
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
                  <FadeInView>
                    <RestaurantInfoCard restaurant={item} />
                  </FadeInView>
                </Spacer>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
};
