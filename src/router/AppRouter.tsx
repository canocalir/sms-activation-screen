import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Views/Home/Home";
import Romance from "../Views/Phone/Phone";
import Pin from "../Views/Pin/Pin";
import Thanks from "../Views/Thanks/Thanks";
import Phone from "../Views/Phone/Phone";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/funny" element={<Phone />} />
        <Route path="/romantic" element={<Romance />} />
        <Route path="/pinscreen" element={<Pin />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
