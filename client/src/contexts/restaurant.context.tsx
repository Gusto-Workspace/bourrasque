// src/contexts/restaurant.context.tsx
import { useEffect, useState, Dispatch, SetStateAction } from "react";
import axios from "axios";

export interface RestaurantData {
  [key: string]: any;
}
export interface RestaurantContextValue {
  restaurantData: RestaurantData | null;
  dataLoading: boolean;
  fetchRestaurantData: () => void;
  setRestaurantData: Dispatch<SetStateAction<RestaurantData | null>>;
}

const API_URL = import.meta.env.VITE_API_URL as string;
const RESTAURANT_ID = import.meta.env.VITE_RESTAURANT_ID as string;

export default function useRestaurantContext(): RestaurantContextValue {
  const [restaurantData, setRestaurantData] = useState<RestaurantData | null>(
    null
  );
  const [dataLoading, setDataLoading] = useState<boolean>(false);

  const fetchRestaurantData = () => {
    setDataLoading(true);
    axios
      .get<{ restaurant: RestaurantData }>(
        `${API_URL}/restaurants/${RESTAURANT_ID}`
      )
      .then((response) => setRestaurantData(response.data.restaurant))
      .catch((error) => console.error("Erreur fetch restaurant:", error))
      .finally(() => setDataLoading(false));
  };

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  return {
    restaurantData,
    dataLoading,
    fetchRestaurantData,
    setRestaurantData,
  };
}
