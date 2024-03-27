import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Error404 } from "./pages/Error404";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Search } from "./pages/search/Search";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/*" element={<Error404 />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Router;
