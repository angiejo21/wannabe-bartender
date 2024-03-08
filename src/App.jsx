import DrinkList from "./components/DrinkList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Input from "./components/Input";

function App() {
  return (
    <div className="min-h-screen bg-stone-950 font-mono">
      <Header />
      <main className="flex flex-col justify-center items-center py-5">
        <div className=" bg-stone-50 bg-opacity-5 text-stone-50 py-4 px-8 rounded-xl">
          <Input />
        </div>
        <DrinkList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
