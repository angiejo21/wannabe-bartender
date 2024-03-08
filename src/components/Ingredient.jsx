function Ingredient({ ingredient }) {
  return (
    <li
      key={ingredient.name}
      className="m-1 py-1 px-2 inline-block rounded-md bg-rose-800"
    >
      <span className="italic">{ingredient.quantity}</span> {ingredient.name}
    </li>
  );
}

export default Ingredient;
