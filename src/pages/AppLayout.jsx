import { Outlet, useNavigation } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Spinner from "../components/Spinner";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid min-h-screen grid-rows-[max-content_1fr_max-content] bg-stone-950 font-mono">
      <Header />
      {isLoading ? <Spinner /> : <Outlet />}
      <Footer />
    </div>
  );
}

export default AppLayout;
