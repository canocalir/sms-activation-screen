import style from "./Home.module.css";
import Button from "../../components/Button/Button";
import cuteMonsterLogo from "../../assets/cute_monster3.png";
import buttonsBackground from "../../assets/cute_monster4.png";
import Pictures from "../../components/Pictures/Pictures";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <div className={style.backgroundContainer}>
        <img src={buttonsBackground} alt="cute_back" />
      </div>
      <img className={style.cuteMonster} src={cuteMonsterLogo} />
      <div className={style.selection_buttons}>
        <p className={style.headingText}>
          Express yourself with
          <br />
          <span id={style.boldText}>New</span>{" "}
          <span id={style.colorText}>WhatsApp Stickers</span>
        </p>
        <p className={style.buttonLabel}>Choose your sticker type:</p>
        <Button buttonStyle="Funny" />
        <Button buttonStyle="Romance" />
      </div>
      <Pictures />
      <Testimonial />
    </>
  );
};

export default Home;
