import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cocktail from "./pages/Cocktail";

function App() {
  return (
    <div className="min-h-screen bg-stone-950 font-mono grid grid-rows-[max-content_1fr_max-content]">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="cocktail/:id" index element={<Cocktail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
