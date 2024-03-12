import axios from "axios";

const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/";

export async function getAllDrinks(drinkName = "a") {
  const url = `${API_URL}search.php?s=${drinkName}`;
  try {
    const res = await axios.get(url);
    if (!res.data) throw Error("Failed fetching drinks");
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
    return newDrinks;
  } catch (err) {
    console.log(err);
  }
}

export async function getSingleDrink(drinkID) {
  const url = `${API_URL}lookup.php?i=${drinkID}`;
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
    return singleDrink;
  } catch (err) {
    console.log(err);
  }
}
