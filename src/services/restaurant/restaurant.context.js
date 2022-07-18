/* eslint-disable no-undef */
import React, {
  useState,
  createContext,
  useEffect,
  useMemo,
  
} from "react";

import { useContext } from "react";
import { restaurantsRequest, restaurantsTransform } from "./restaurant.service";
import { LocationContext } from "../location/location.context";
// create global context
export const RestaurantContext = createContext();


export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (loc) => {
    setIsLoading(true);
    setRestaurants([]);

    restaurantsRequest(loc)
    .then(restaurantsTransform)
    .then((results) => {
      setError(null);
      setIsLoading(false);
      setRestaurants(results);
    })
    .catch((err) => {
      setRestaurants([]);
      setIsLoading(false);
      setError(err);
    });
  };
  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);
  

  return (
    <RestaurantContext.Provider value={{ restaurants,
      isLoading,
      error, }}>
      {children}
    </RestaurantContext.Provider>
  );
};
