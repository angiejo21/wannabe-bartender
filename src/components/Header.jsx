import { PiMartini } from "react-icons/pi";

function Header() {
  return (
    <header className="w-full p-2">
      <div className="flex w-fit items-center gap-2 rounded-full bg-stone-50 bg-opacity-5 px-4 py-2">
        <PiMartini className="text-rose-700" />
        <h2 className="text-stone-100">Wannabe Bartender</h2>
      </div>
    </header>
  );
}

export default Header;
