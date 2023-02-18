import Description from "./components/Description/Description";
import HeaderLogos from "./components/HeaderLogos/HeaderLogos";
import AppRouter from "./router/AppRouter";
import style from "./App.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className={style.main_container}>
      <div className={style.content_container}>
        <HeaderLogos />
        <AppRouter />
        <Description />
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );
};

export default App;
