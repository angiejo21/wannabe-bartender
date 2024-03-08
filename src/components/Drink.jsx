import { PiCheck, PiX } from "react-icons/pi";

function Drink({ drink }) {
  return (
    <button className="w-min bg-gradient-to-tr from-rose-800 to-rose-950 p-5 rounded-xl text-stone-100 text-sm m-2 outline-none ring ring-offset-3 ring-transparent ring-3 focus:ring-rose-700 transition-all">
      <figure className="">
        <img
          src={drink.image}
          alt={drink.name}
          className="max-w-64 rounded-md filter grayscale active:grayscale-0 hover:grayscale-0 transition-all"
        />
      </figure>
      <h4 className="text-lg font-semibold py-2">{drink.name}</h4>
      <p className="flex items-center text-start">
        Glass:
        <span className="m-1 py-1 px-2 inline-block rounded-md bg-rose-700 w-fit">
          {drink.glass}
        </span>
      </p>
      <p className="flex items-center">
        Alcohol:
        <span className="m-1 py-1 px-2 inline-block rounded-md bg-rose-700">
          {drink.alcoholic ? <PiCheck /> : <PiX />}
        </span>
      </p>
    </button>
  );
}

export default Drink;
