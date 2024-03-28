import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Error404 } from "./pages/Error404";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Search } from "./pages/search/Search";
import { Detail } from "./pages/detail/Detail";

const Router = () => {
  return (
    <div>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
};

export default Router;
