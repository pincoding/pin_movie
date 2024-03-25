import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Error404 } from "./pages/Error404";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/*" element={<Error404 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
