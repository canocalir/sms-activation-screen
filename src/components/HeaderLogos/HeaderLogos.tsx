import newLogo from "../../assets/NEW.png";
import whatsAppLogo from "../../assets/whatsapp.png";
import laughLogo from "../../assets/laugh.png"
import style from "../HeaderLogos/HeaderLogo.module.css";

const HeaderLogos = () => {
  return (
    <div className={style.headerIcons}>
      <img src={newLogo} alt="new_logo" />
      <img src={whatsAppLogo} height={"56px"} alt="new_logo" />
      <img src={laughLogo} height={"56px"} alt="new_logo" />
    </div>
  );
};

export default HeaderLogos;
