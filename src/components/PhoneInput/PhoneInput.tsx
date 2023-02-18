import style from "../PhoneInput/PhoneInput.module.css";
import phone from "../../assets/phone.png";

const PhoneInput = () => {
  return (
    <div className={style.inputContainer}>
      <img className={style.phone} src={phone} alt="phone" />
      <input
        type="tel"
        id="phone"
        name="phone"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        className={style.phoneInput}
      />
    </div>
  );
};

export default PhoneInput;
