import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="flex min-h-screen items-center justify-center bg-stone-950 p-5 font-mono">
      <div className="flex flex-col items-center gap-3 rounded-xl bg-stone-50 bg-opacity-5 px-8 py-4 text-stone-50">
        <h2 className="text-xl">Ops.. qualcosa è andato storto 😢</h2>
        <p className="rounded-sm bg-red-400 px-2 text-red-800">
          {error.data || error.message}
        </p>
        <button
          onClick={() => navigate(-1)}
          className="rounded-xl border-2 border-rose-900 px-5 py-2 transition-all hover:border-transparent hover:bg-rose-700 hover:bg-opacity-50 active:border-transparent active:bg-rose-700"
        >
          &larr; Indietro
        </button>
      </div>
    </div>
  );
}

export default Error;
