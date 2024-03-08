import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();

export default function AppProvider({ children }) {
  const [drinks, setDrinks] = useState([]);
  const [drinkName, setDrinkName] = useState("a");
  const [drinkSelected, setDrinkSelected] = useState(null);
  const [drinkDetails, setDrinkDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

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

  useEffect(() => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkSelected}`;
    setIsLoading(true);
    const getSingleDrink = async () => {
      try {
        const res = await axios.get(url);
        console.log(res);
        const {
          strAlcoholic,
          strCategory,
          strDrink,
          strDrinkThumb,
          strGlass,
          strInstructions,
          strInstructionsIT,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
          strMeasure1,
          strMeasure2,
          strMeasure3,
          strMeasure4,
          strMeasure5,
        } = res.data.drinks[0];
        const singleDrink = {
          name: strDrink,
          category: strCategory,
          image: strDrinkThumb,
          glass: strGlass,
          alcoholic: strAlcoholic,
          instructions: strInstructions,
          instructionsIT: strInstructionsIT,
          ingredients: [
            { name: strIngredient1, quantity: strMeasure1 },
            { name: strIngredient2, quantity: strMeasure2 },
            { name: strIngredient3, quantity: strMeasure3 },
            { name: strIngredient4, quantity: strMeasure4 },
            { name: strIngredient5, quantity: strMeasure5 },
          ],
        };
        setDrinkDetails(singleDrink);
      } catch (err) {
        console.log(err);
      }
    };
    getSingleDrink();
    setIsLoading(false);
  }, [drinkSelected]);

  return (
    <AppContext.Provider
      value={{
        drinks,
        setDrinks,
        drinkName,
        setDrinkName,
        setDrinkSelected,
        drinkDetails,
        isLoading,
      }}
    >
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
