import style from "../Testimonial/Testimonial.module.css";
import testimonial from "../../assets/testimonial.png";
import star from "../../assets/star.png";

const Testimonial = () => {
  return (
    <div className={style.testimonialContainer}>
      <img src={testimonial} alt="profile-logo" />
      <div className={style.testimonialMiddle}>
        <p className={style.testimonialParagraph}>
          It's good. There are many cool stickers!
        </p>
        <div className={style.starContainer}>
          {[1, 2, 3, 4].map((index) => {
            return <img key={index} src={star} alt="star" />;
          })}
        </div>
        <p className={style.testimonialName}>- Fikri Aziz</p>
      </div>
    </div>
  );
};

export default Testimonial;
