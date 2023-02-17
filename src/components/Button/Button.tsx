import style from "./Button.module.css";

type ButtonProps = {
  buttonStyle: string;
};

const Button = ({ buttonStyle }: ButtonProps) => {
  return <button className={style.typeButton}>{buttonStyle}</button>;
};

export default Button;
