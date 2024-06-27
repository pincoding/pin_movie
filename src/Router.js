import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Error404 } from "./pages/Error404";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Search } from "./pages/search/Search";
import { Detail } from "./pages/detail/Detail";
import { List } from "./pages/list/List";
import { Login } from "./pages/Login/Login";
import { Join } from "./pages/Login/Join";

const Router = () => {
  return (
    <div>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/list/:id" element={<List />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="join" element={<Join />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
};

export default Router;
