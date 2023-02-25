import style from "../../styles/global.module.css";
import monsterRight from "../../assets/cute_monster_right.png";

const Thanks = () => {
  return (
    <>
      <img className={style.monsterRight} src={monsterRight} />
      <div className={style.eventContainer}>
        <p className={style.phonePageHeading}>Thank you!</p>
        <p className={style.pinLabel}>
          Now you can express your emotions <br /> with the amazing stickers.
          Have fun!
        </p>
      </div>
    </>
  );
};

export default Thanks;
