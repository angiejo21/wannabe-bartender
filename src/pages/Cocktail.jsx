import { Link, useLoaderData } from "react-router-dom";
import SingleCocktail from "../components/SingleCocktail";
import { getSingleDrink } from "../CocktailsAPI";

function Cocktail() {
  const singleDrinkDetails = useLoaderData();

  return (
    <>
      <main className="flex flex-col justify-start items-center p-5 ">
        <Link
          to="/"
          className=" bg-stone-50 bg-opacity-5 text-stone-50 py-4 px-8 rounded-xl mb-5 hover:text-rose-700 active:text-rose-700 hover:bg-opacity-0 transition-all"
        >
          &larr; Indietro
        </Link>
        <SingleCocktail drinkDetails={singleDrinkDetails} />
      </main>
    </>
  );
}

export async function loader({ params }) {
  console.log("single fetching starting");
  const drink = await getSingleDrink(params.id);
  if (!drink) return null;
  return drink;
}

export default Cocktail;
