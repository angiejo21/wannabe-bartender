import { PiCheck, PiX } from "react-icons/pi";
import { Link } from "react-router-dom";

function Drink({ drink }) {
  return (
    <button className="w-min bg-gradient-to-tr from-rose-800 to-rose-950 p-5 rounded-xl text-stone-100 text-sm m-2 outline-none ring ring-offset-3 ring-transparent ring-3 focus:ring-rose-700 transition-all  filter grayscale active:grayscale-0 focus:grayscale-0 hover:grayscale-0 ">
      <Link to={`/cocktail/${drink.id}`}>
        <img
          src={drink.image}
          alt={drink.name}
          className="max-w-64 rounded-md"
        />

        <h4 className="text-lg font-semibold py-2">{drink.name}</h4>
        <p className="flex items-center text-start">
          Bicchiere:
          <span className="m-1 py-1 px-2 inline-block rounded-md bg-rose-700 w-fit">
            {drink.glass}
          </span>
        </p>
        <p className="flex items-center">
          Alcolico:
          <span className="m-1 py-1 px-2 inline-block rounded-md bg-rose-700">
            {drink.alcoholic ? <PiCheck /> : <PiX />}
          </span>
        </p>
      </Link>
    </button>
  );
}

export default Drink;
