import Drink from "./Drink.jsx";

function DrinkList({ drinks }) {
  return (
    <div className="my-5 flex w-full flex-col items-center px-5">
      <h2 className=" mb-3 rounded-full bg-stone-50  bg-opacity-5 px-6 py-2 text-xl uppercase text-stone-100">
        Drinks
      </h2>
      <div className="flex flex-wrap justify-center">
        {drinks &&
          drinks.map((drink) => <Drink drink={drink} key={drink.id} />)}
      </div>
    </div>
  );
}

export default DrinkList;
