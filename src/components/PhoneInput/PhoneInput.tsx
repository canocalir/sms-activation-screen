import style from "../PhoneInput/PhoneInput.module.css";
import phone from "../../assets/phone.png";
import { FC } from "react";
import { useAppDispatch } from "../../app/hooks";
import { setPhoneNumber } from "../../features/phoneSlice";

const PhoneInput: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <div className={style.inputContainer}>
      <img className={style.phone} src={phone} alt="phone" />
      <input
        maxLength={10}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(setPhoneNumber(e.target.value))
        }
        type="tel"
        id="phone"
        name="phone"
        className={style.phoneInput}
        pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
        required
        placeholder="123-456-78-90"
      />
    </div>
  );
};

export default PhoneInput;
