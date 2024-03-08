import { PiBrandy, PiCheck, PiTag, PiX } from "react-icons/pi";
import { useGlobalContext } from "../context";
import Ingredient from "./Ingredient";

function SingleCocktail() {
  const { drinkDetails } = useGlobalContext();

  return (
    <div className=" bg-stone-50 bg-opacity-5 text-stone-50 py-4 px-8 rounded-xl mb-5 flex flex-col gap-3 w-full md:w-2/3 lg:flex-row lg:w-auto xl:w-2/3 ">
      <figure className="aspect-square">
        <img
          src={drinkDetails.image}
          alt={drinkDetails.name}
          className=" rounded-md"
        />
      </figure>
      <div className=" flex flex-col gap-3">
        <h2 className="text-xl font-semibold m-1 py-1 px-2 inline-block rounded-md bg-rose-700">
          {drinkDetails.name}
        </h2>
        <div className="">
          <p>
            <PiTag className="inline-block text-rose-600" />{" "}
            {drinkDetails.category}
          </p>
          <p>
            <PiBrandy className="inline-block text-rose-600" />{" "}
            {drinkDetails.glass}
          </p>
          <p>
            {drinkDetails.alcoholic ? (
              <PiCheck className="inline-block text-rose-600" />
            ) : (
              <PiX className="inline-block text-rose-600" />
            )}{" "}
            {drinkDetails.alcoholic}
          </p>
        </div>
        <ul>
          {drinkDetails.ingredients.map((ingredient) => {
            if (ingredient.name)
              return (
                <Ingredient ingredient={ingredient} key={ingredient.name} />
              );
            else return null;
          })}
        </ul>
        <p>{drinkDetails.instructionsIT || drinkDetails.instructions}</p>
      </div>
    </div>
  );
}

export default SingleCocktail;
