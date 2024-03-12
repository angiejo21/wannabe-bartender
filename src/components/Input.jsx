import { useEffect, useState } from "react";
import { getAllDrinks } from "../CocktailsAPI.js";

function Input({ setDrinks }) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchAllDrinks() {
      try {
        const allDrinks = await getAllDrinks(searchTerm);
        if (!allDrinks) throw Error("No drinks found");
        setDrinks(allDrinks);
      } catch (err) {
        console.log(err);
      }
    }
    fetchAllDrinks();
  }, [searchTerm, setDrinks]);

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="searchDrink" className="text-stone-100">
        Di cosa hai voglia?
      </label>
      <input
        type="text"
        name="searchDrink"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="text-stone-950 bg-stone-100 rounded-full px-2 outline-none ring ring-stone-100 ring-offset-3 focus:ring-rose-700 transition-all"
      ></input>
    </div>
  );
}

export default Input;
