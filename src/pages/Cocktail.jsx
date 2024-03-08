import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import Spinner from "../components/Spinner";
import SingleCocktail from "../components/SingleCocktail";

function Cocktail() {
  const { setDrinkSelected, isLoading } = useGlobalContext();
  const { id } = useParams();

  useEffect(() => {
    setDrinkSelected(id);
  }, [id, setDrinkSelected]);

  return (
    <>
      <main className="flex flex-col justify-start items-center p-5 ">
        <Link
          to="/"
          className=" bg-stone-50 bg-opacity-5 text-stone-50 py-4 px-8 rounded-xl mb-5 hover:text-rose-700 active:text-rose-700 hover:bg-opacity-0 transition-all"
        >
          &larr; Indietro
        </Link>
        {isLoading ? <Spinner /> : <SingleCocktail />}
      </main>
    </>
  );
}

export default Cocktail;
