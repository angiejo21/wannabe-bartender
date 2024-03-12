import { PiBrandy, PiCheck, PiTag, PiX } from "react-icons/pi";

import Ingredient from "./Ingredient";

function SingleCocktail({ drinkDetails }) {
  return (
    <div className=" mb-5 flex w-full flex-col gap-3 rounded-xl bg-stone-50 bg-opacity-5 px-8 py-4 text-stone-50 sm:w-2/3 md:w-auto md:flex-row xl:w-2/3 ">
      <figure className="aspect-square">
        <img
          src={drinkDetails.image}
          alt={drinkDetails.name}
          className=" rounded-md"
        />
      </figure>
      <div className=" flex flex-col gap-3">
        <h2 className="m-1 inline-block rounded-md bg-rose-700 px-2 py-1 text-xl font-semibold">
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
