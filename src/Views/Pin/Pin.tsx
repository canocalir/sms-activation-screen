import * as pinInput from "@zag-js/pin-input";
import behindMonster from "../../assets/cute_monster6.png";
import Button from "../../components/Button/Button";
import Pictures from "../../components/Pictures/Pictures";
import Testimonial from "../../components/Testimonial/Testimonial";
import style from "../../styles/page.module.css";
import { useMachine, normalizeProps } from "@zag-js/react";
import { Link } from "react-router-dom";

const Pin = () => {
  const [state, send] = useMachine(
    pinInput.machine({
      id: "1",
      placeholder: "",
    })
  );
  const api = pinInput.connect(state, send, normalizeProps);
  console.log(api.valueAsString);
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
        <div className={style.pinContainer} {...api.rootProps}>
          <input
            className={style.pinInput}
            {...api.getInputProps({ index: 0 })}
          />
          <input
            className={style.pinInput}
            {...api.getInputProps({ index: 1 })}
          />
          <input
            className={style.pinInput}
            {...api.getInputProps({ index: 2 })}
          />
          <input
            className={style.pinInput}
            {...api.getInputProps({ index: 3 })}
          />
        </div>
        <Link className={style.Link} to={"/thanks"}>
          <Button buttonStyle="Confirm" />
        </Link>
      </div>
      <Pictures />
      <Testimonial />
    </>
  );
};

export default Pin;
