import newLogo from "../../assets/NEW.png";
import whatsAppLogo from "../../assets/whatsapp.png";
import laughLogo from "../../assets/laugh.png"
import style from "../HeaderLogos/HeaderLogo.module.css";
import { FC } from "react";

const HeaderLogos:FC = () => {
  return (
    <div className={style.headerIcons}>
      <img src={newLogo} alt="new_logo" />
      <img src={whatsAppLogo} alt="whatsapp_logo" />
      <img src={laughLogo} alt="laugh_logo" />
    </div>
  );
};

export default HeaderLogos;
