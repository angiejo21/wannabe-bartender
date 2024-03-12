import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home, { loader as allDrinksLoader } from "./pages/Home";

import Cocktail, { loader as singleDrinkLoader } from "./pages/Cocktail";
import AppLayout from "./pages/AppLayout";
import Error from "./components/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: allDrinksLoader,
        errorElement: <Error />,
      },
      {
        path: "/cocktail/:id",
        element: <Cocktail />,
        loader: singleDrinkLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
