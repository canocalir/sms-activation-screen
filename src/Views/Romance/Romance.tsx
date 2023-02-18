import Button from "../../components/Button/Button"
import Label from "../../components/Label/Label"
import PhoneInput from "../../components/PhoneInput/PhoneInput"
import Pictures from "../../components/Pictures/Pictures"
import Testimonial from "../../components/Testimonial/Testimonial"
import romanticMonster from "../../assets/cute_monster8.png"
import style from "../../styles/page.module.css"

const Romance = () => {
  return (
    <>
      <div className={style.eventContainer}>
        <img className={style.middleMonster} src={romanticMonster} />
        <p className={style.phonePageHeading}>
          You're so romantics
        </p>
        <Label label="Enter your number to get all the sticker packs" />
        <PhoneInput/>
        <Button buttonStyle="Submit to Subscribe" />
      </div>

      <Pictures />
      <Testimonial />
    </>
  )
}

export default Romance