import Button from "../../components/Button/Button";
import Label from "../../components/Label/Label";
import PhoneInput from "../../components/PhoneInput/PhoneInput";
import Pictures from "../../components/Pictures/Pictures";
import Testimonial from "../../components/Testimonial/Testimonial";
import romanticMonster from "../../assets/cute_monster8.png";
import style from "../../styles/page.module.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { SyntheticEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPinResponse } from "../../features/pinSlice";

const Romance = () => {
  const { phoneNumber } = useAppSelector((state) => state.phone);
  const {pin} = useAppSelector(state => state.pin)
  const navigate = useNavigate();
  const dispatch = useAppDispatch()

  const fetchPhoneResponse = async (e: SyntheticEvent) => {
    e.preventDefault();
    const url = `https://easy-tan-cormorant-hose.cyclic.app/https://75j6v3-8080.preview.csb.app/api/v1/trigger-pin?msisdn=${phoneNumber}&user_id=1`;
    const res = await fetch(url);
    const data = await res.json();
    dispatch(getPinResponse(data))
  };

  console.log(pin);

  useEffect(() => {
    pin?.success && navigate("/pinscreen");
  }, [pin]);

  return (
    <>
      <div className={style.eventContainer}>
        <img className={style.middleMonster} src={romanticMonster} />
        <p className={style.phonePageHeading}>You're so romantics</p>
        <Label label="Enter your number to get all the sticker packs" />
        <form onSubmit={fetchPhoneResponse} className={style.numberForm}>
          <PhoneInput />
          <Button buttonStyle="Submit to Subscribe" />
        </form>
      </div>

      <Pictures />
      <Testimonial />
    </>
  );
};

export default Romance;
