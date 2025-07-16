import React, { createContext, ReactNode, useContext } from "react";
import useRestaurantContext, { RestaurantContextValue } from "./restaurant.context";

// 1. Définir le type du contexte global
interface GlobalContextValue {
  restaurant: RestaurantContextValue;
}

// 2. Créer le contexte avec typage
const GlobalContext = createContext<GlobalContextValue | undefined>(undefined);

// 3. Typage des props du provider
interface GlobalProviderProps {
  children: ReactNode;
}

// 4. Fournisseur global
export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const restaurant = useRestaurantContext();

  return (
    <GlobalContext.Provider value={{ restaurant }}>
      {children}
    </GlobalContext.Provider>
  );
};

// 5. Hook pour consommer le contexte global
export const useGlobal = (): GlobalContextValue => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobal must be used within a GlobalProvider");
  }
  return context;
};

export default GlobalContext;
