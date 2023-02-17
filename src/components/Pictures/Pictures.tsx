import style from "./Pictures.module.css";
import moreLogos from "../../assets/MORE.png"
import smallNew from "../../assets/smallNew.png";

const Pictures = () => {
  return (
    <div className={style.picturesContainer}>
      <img id={style.smallNewBadge} src={smallNew} alt="small-new-badge" />
      <img id={style.pictures} src={moreLogos} alt="more-logos" />
    </div>
  );
};

export default Pictures;
