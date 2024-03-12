import Drink from "./Drink.jsx";

function DrinkList({ drinks }) {
  return (
    <div className="my-5 w-full px-10 flex flex-col items-center">
      <h2 className=" text-stone-100 text-xl uppercase  bg-stone-50 bg-opacity-5 py-2 px-6 rounded-full mb-3">
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
