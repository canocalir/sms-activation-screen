import Button from "../../components/Button/Button";
import Label from "../../components/Label/Label";
import PhoneInput from "../../components/PhoneInput/PhoneInput";
import Pictures from "../../components/Pictures/Pictures";
import Testimonial from "../../components/Testimonial/Testimonial";
import romanticMonster from "../../assets/cute_monster8.png";
import funnyMonster from "../../assets/cute_monster5.png";
import shadow from "../../assets/shadow.png";
import style from "../../styles/global.module.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { SyntheticEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getPinResponse } from "../../features/pinSlice";
import Spinner from "../../components/Spinner/Spinner";

const Phone = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { phoneNumber } = useAppSelector((state) => state.phone);
  const { pin } = useAppSelector((state) => state.pin);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();

  const fetchPhoneResponse = async (e: SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    const url = `https://easy-tan-cormorant-hose.cyclic.app/https://75j6v3-8080.preview.csb.app/api/v1/trigger-pin?msisdn=${phoneNumber}&user_id=1`;
    const res = await fetch(url);
    const data = await res.json();
    dispatch(getPinResponse(data));
    setLoading(false);
  };

  const conditionalLogo = () => {
    switch (location.pathname) {
      case "/romantic":
        return romanticMonster;
      case "/funny":
        return funnyMonster;
    }
  };

  const conditionalHeading = () => {
    switch (location.pathname) {
      case "/romantic":
        return "You're so romantics";
      case "/funny":
        return "You've got good sense of humor";
    }
  };

  useEffect(() => {
    pin?.success && navigate("/pinscreen");
  }, [pin]);

  return (
    <>
      <div className={style.eventContainer}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <img className={style.middleMonster} src={conditionalLogo()} />
            <img className={style.monsterShadow} src={shadow} />
            <p className={style.phonePageHeading}>{conditionalHeading()}</p>
            <Label label="Enter your number to get all the sticker packs" />
            <form onSubmit={fetchPhoneResponse} className={style.numberForm}>
              <PhoneInput />
              <Button buttonStyle="Submit to Subscribe" />
            </form>
          </>
        )}
      </div>

      <Pictures />
      <Testimonial />
    </>
  );
};

export default Phone;
