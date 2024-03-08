import { useRef } from "react";
import { useGlobalContext } from "../context.jsx";

function Input() {
  const { setDrinkName } = useGlobalContext();
  const drinkValue = useRef("");

  function handleChange() {
    setDrinkName(drinkValue.current.value);
  }

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="searchDrink" className="text-stone-100">
        Di cosa hai voglia?
      </label>
      <input
        type="text"
        name="searchDrink"
        ref={drinkValue}
        onChange={handleChange}
        className="text-stone-950 bg-stone-100 rounded-full px-2 outline-none ring ring-stone-100 ring-offset-3 focus:ring-rose-700 transition-all"
      ></input>
    </div>
  );
}

export default Input;
