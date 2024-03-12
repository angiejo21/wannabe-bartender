function Ingredient({ ingredient }) {
  return (
    <li
      key={ingredient.name}
      className="m-1 inline-block rounded-md bg-rose-800 px-2 py-1"
    >
      <span className="italic">{ingredient.quantity}</span> {ingredient.name}
    </li>
  );
}

export default Ingredient;
