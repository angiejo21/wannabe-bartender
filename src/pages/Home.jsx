import DrinkList from "../components/DrinkList";

import Input from "../components/Input";

function Home() {
  return (
    <>
      <main className="flex flex-col justify-center items-center py-5">
        <div className=" bg-stone-50 bg-opacity-5 text-stone-50 py-4 px-8 rounded-xl">
          <Input />
        </div>
        <DrinkList />
      </main>
    </>
  );
}

export default Home;
