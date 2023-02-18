import style from "../../styles/global.module.css";
import Button from "../../components/Button/Button";
import cuteMonsterLogo from "../../assets/cute_monster3.png";
import buttonsBackground from "../../assets/cute_monster4.png";
import Pictures from "../../components/Pictures/Pictures";
import Testimonial from "../../components/Testimonial/Testimonial";
import Label from "../../components/Label/Label";
import { Link } from "react-router-dom";

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
          <strong>New</strong>{" "}
          <span id={style.colorText}>WhatsApp Stickers</span>
        </p>
        <Label label={"Choose your sticker type:"} />
        <Link className={style.Link} to={"/funny"}>
          <Button buttonStyle="Funny" />
        </Link>
        <Link className={style.Link} to={"/romantic"}>
          <Button buttonStyle="Romance" />
        </Link>
      </div>
      <Pictures />
      <Testimonial />
    </>
  );
};

export default Home;
