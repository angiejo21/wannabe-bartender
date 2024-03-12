import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="min-h-screen bg-stone-950 font-mono flex p-5 justify-center items-center">
      <div className="bg-stone-50 bg-opacity-5 text-stone-50 py-4 px-8 rounded-xl flex flex-col items-center gap-3">
        <h2 className="text-xl">Ops.. qualcosa è andato storto 😢</h2>
        <p className="bg-red-400 px-2 rounded-sm text-red-800">
          {error.data || error.message}
        </p>
        <button
          onClick={() => navigate(-1)}
          className="py-2 px-5 rounded-xl border-2 hover:border-transparent active:border-transparent border-rose-900 hover:bg-rose-700 active:bg-rose-700 hover:bg-opacity-50 transition-all"
        >
          &larr; Indietro
        </button>
      </div>
    </div>
  );
}

export default Error;
