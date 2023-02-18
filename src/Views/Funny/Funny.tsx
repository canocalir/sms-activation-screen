import style from "../../styles/page.module.css";
import funnyMonster from "../../assets/cute_monster5.png";
import Pictures from "../../components/Pictures/Pictures";
import Testimonial from "../../components/Testimonial/Testimonial";
import Label from "../../components/Label/Label";
import Button from "../../components/Button/Button";
import PhoneInput from "../../components/PhoneInput/PhoneInput";

const Funny = () => {
  return (
    <>
      <div className={style.eventContainer}>
        <img className={style.middleMonster} src={funnyMonster} />
        <p className={style.phonePageHeading}>You've got good sense of humor</p>
        <Label label="Enter your number to get all the sticker packs" />
        <PhoneInput />
        <Button buttonStyle="Submit to Subscribe" />
      </div>

      <Pictures />
      <Testimonial />
    </>
  );
};

export default Funny;
