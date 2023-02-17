import Description from "./components/Description/Description";
import HeaderLogos from "./components/HeaderLogos/HeaderLogos";
import AppRouter from "./router/AppRouter";
import style from "./App.module.css";

const App = () => {
  return (
    <div className={style.main_container}>
      <div className={style.content_container}>
        <HeaderLogos />
        <AppRouter />
        <Description />
      </div>
    </div>
  );
};

export default App;
