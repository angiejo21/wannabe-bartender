import { PiCheck, PiX } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

function Drink({ drink }) {
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    navigate(`/cocktail/${drink.id}`);
  }
  return (
    <button
      className="ring-offset-3 ring-3 m-2 w-min rounded-xl bg-gradient-to-tr from-rose-800 to-rose-950 p-5 text-sm text-stone-100 outline-none ring ring-transparent grayscale filter transition-all hover:grayscale-0 focus:ring-rose-700 focus:grayscale-0 active:grayscale-0 "
      onClick={handleClick}
    >
      <img src={drink.image} alt={drink.name} className="max-w-64 rounded-md" />

      <h4 className="py-2 text-lg font-semibold">{drink.name}</h4>
      <p className="flex items-center text-start">
        Bicchiere:
        <span className="m-1 inline-block w-fit rounded-md bg-rose-700 px-2 py-1">
          {drink.glass}
        </span>
      </p>
      <p className="flex items-center">
        Alcolico:
        <span className="m-1 inline-block rounded-md bg-rose-700 px-2 py-1">
          {drink.alcoholic ? <PiCheck /> : <PiX />}
        </span>
      </p>
    </button>
  );
}

export default Drink;
