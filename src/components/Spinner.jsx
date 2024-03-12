import { PiCircleNotch } from "react-icons/pi";

function Spinner() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-spin flex items-center justify-center text-5xl text-rose-600">
        <PiCircleNotch />
      </div>
    </div>
  );
}

export default Spinner;
