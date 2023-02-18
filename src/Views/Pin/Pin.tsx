import * as pinInput from "@zag-js/pin-input";
import behindMonster from "../../assets/cute_monster6.png";
import Button from "../../components/Button/Button";
import Pictures from "../../components/Pictures/Pictures";
import Testimonial from "../../components/Testimonial/Testimonial";
import style from "../../styles/page.module.css";
import { useMachine, normalizeProps } from "@zag-js/react";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { SyntheticEvent, useEffect } from "react";
import { pinError } from "../../helpers/toastError";
import { pinSuccess } from "../../helpers/toastSuccess";

const Pin = () => {
  const [state, send] = useMachine(
    pinInput.machine({
      id: "1",
      placeholder: "",
    })
  );
  const api = pinInput.connect(state, send, normalizeProps);
  const { pin } = useAppSelector((state) => state.pin);
  const navigate = useNavigate();
  console.log(api.valueAsString);

  const pinCodeCheckerHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    api.valueAsString === pin?.pin && pin ? navigate("/thanks") : pinError();
  };

  return (
    <>
      <img className={style.behindMonster} src={behindMonster} />
      <div className={style.eventContainer}>
        <p className={style.phonePageHeading}>The sticker packs is ready!</p>
        <p className={style.pinLabel}>
          We’ve sent you a <strong>4 digit code </strong>
          <br />
          please enter it below to confirm subscription!
        </p>
        <form onSubmit={pinCodeCheckerHandler} className={style.numberForm}>
          <div className={style.pinContainer} {...api.rootProps}>
            <input
              className={style.pinInput}
              required
              {...api.getInputProps({ index: 0 })}
            />
            <input
              className={style.pinInput}
              required
              {...api.getInputProps({ index: 1 })}
            />
            <input
              className={style.pinInput}
              required
              {...api.getInputProps({ index: 2 })}
            />
            <input
              className={style.pinInput}
              required
              {...api.getInputProps({ index: 3 })}
            />
          </div>
          <Button buttonStyle="Confirm" />
        </form>
      </div>
      <Pictures />
      <Testimonial />
    </>
  );
};

export default Pin;
