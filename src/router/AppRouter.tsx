import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home/Home";
import Pin from "../views/Pin/Pin";
import Thanks from "../views/Thanks/Thanks";
import Phone from "../views/Phone/Phone";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/funny" element={<Phone />} />
        <Route path="/romantic" element={<Phone />} />
        <Route path="/pinscreen" element={<Pin />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
