import { PiCircleNotch } from "react-icons/pi";

function Spinner() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex animate-spin items-center justify-center text-5xl text-rose-600">
        <PiCircleNotch />
      </div>
    </div>
  );
}

export default Spinner;
