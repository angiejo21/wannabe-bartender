import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();

export default function AppProvider({ children }) {
  const [drinks, setDrinks] = useState([]);
  const [drinkName, setDrinkName] = useState("a");

  useEffect(() => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`;

    const getDrinks = async () => {
      try {
        const res = await axios.get(url);
        const { drinks } = res.data;
        const newDrinks = drinks.map((drink) => {
          const { idDrink, strDrink, strDrinkThumb, strGlass, strAlcoholic } =
            drink;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            glass: strGlass,
            alcoholic: strAlcoholic,
          };
        });
        setDrinks(newDrinks);
      } catch (err) {
        console.log(err);
      }
    };
    getDrinks();
  }, [drinkName]);

  return (
    <AppContext.Provider value={{ drinks, setDrinks, drinkName, setDrinkName }}>
      {children}
    </AppContext.Provider>
  );
}

export function useGlobalContext() {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error("AppContext used outside AppProvider");
  return context;
}
