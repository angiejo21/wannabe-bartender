import { useLoaderData } from "react-router-dom";

import DrinkList from "../components/DrinkList";
import Input from "../components/Input";

import { getAllDrinks } from "../CocktailsAPI";
import { useEffect, useState } from "react";

function Home() {
  const allDrinks = useLoaderData();
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    setDrinks(allDrinks);
  }, [allDrinks]);

  return (
    <>
      <main className="flex flex-col justify-center items-center py-5">
        <div className=" bg-stone-50 bg-opacity-5 text-stone-50 py-4 px-8 rounded-xl">
          <Input setDrinks={setDrinks} />
        </div>
        <DrinkList drinks={drinks} />
      </main>
    </>
  );
}

export async function loader() {
  console.log("all fetching starting");
  const allDrinks = await getAllDrinks();
  if (!allDrinks) return null;
  return allDrinks;
}

export default Home;
