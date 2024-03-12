import { Outlet, useNavigation } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Spinner from "../components/Spinner";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="min-h-screen bg-stone-950 font-mono grid grid-rows-[max-content_1fr_max-content]">
      <Header />
      {isLoading ? <Spinner /> : <Outlet />}
      <Footer />
    </div>
  );
}

export default AppLayout;
