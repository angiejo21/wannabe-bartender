import { Link, useLoaderData } from "react-router-dom";
import SingleCocktail from "../components/SingleCocktail";
import { getSingleDrink } from "../CocktailsAPI";

function Cocktail() {
  const singleDrinkDetails = useLoaderData();

  return (
    <>
      <main className="flex flex-col items-center justify-start p-5 ">
        <Link
          to="/"
          className=" mb-5 rounded-xl bg-stone-50 bg-opacity-5 px-8 py-4 text-stone-50 transition-all hover:bg-opacity-0 hover:text-rose-700 active:text-rose-700"
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
