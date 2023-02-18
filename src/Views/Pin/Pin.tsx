import * as pinInput from "@zag-js/pin-input";
import behindMonster from "../../assets/cute_monster6.png";
import Button from "../../components/Button/Button";
import Pictures from "../../components/Pictures/Pictures";
import Testimonial from "../../components/Testimonial/Testimonial";
import style from "../../styles/global.module.css";
import { useMachine, normalizeProps } from "@zag-js/react";
import { useNavigate } from "react-router-dom";
import { SyntheticEvent } from "react";
import { pinError } from "../../helpers/toastError";

const Pin = () => {
  const [state, send] = useMachine(
    pinInput.machine({
      id: "1",
      placeholder: "",
    })
  );
  const api = pinInput.connect(state, send, normalizeProps);
  const navigate = useNavigate();

  const pinCodeCheckerHandler = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const url = `https://easy-tan-cormorant-hose.cyclic.app/https://75j6v3-8080.preview.csb.app/api/v1/verify-pin?pin=${api.valueAsString}&user_id=1`;
      const res = await fetch(url);
      const data = await res.json();
      data?.success && navigate("/thanks");
    } catch (error) {
      error && pinError();
    }
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
