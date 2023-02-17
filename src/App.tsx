import style from "./App.module.css";
import buttonsBackground from "./assets/cute_monster4.png";
import moreLogos from "./assets/MORE.png"
import Button from "./components/Button/Button";
import HeaderLogos from "./components/HeaderLogos/HeaderLogos";
import cuteMonsterLogo from "./assets/cute_monster3.png"
import Testimonial from "./components/Testimonial/Testimonial";
import Description from "./components/Description/Description";

const App = () => {
  return (
    <div className={style.main_container}>
              <img className={style.cuteMonster} src={cuteMonsterLogo}/>

      <div className={style.content_container}>
        <HeaderLogos/>
        <div className={style.backgroundContainer}>
        <img src={buttonsBackground} alt="cute_back" />
        </div>
        <div className={style.selection_buttons}>
          <p className={style.headingText}>
            Express yourself with
            <br/> 
            <span id={style.boldText}>New</span>{" "}
            <span id={style.colorText}>WhatsApp Stickers</span>
          </p>
          <p>Choose your sticker type:</p>
          <Button buttonStyle="Funny"/>
          <Button buttonStyle="Romance"/>
        </div>
        <div className={style.moreLogosContainer}>
          <img src={moreLogos} alt="more-logos" />
        </div>
        <Testimonial/>
        <Description/>
      </div>
    </div>
  );
};

export default App;
