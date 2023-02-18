import style from "../../styles/global.module.css";

type Label = {
  label: string;
};

const Label = ({ label }: Label) => {
  return <p className={style.buttonLabel}>{label}</p>;
};

export default Label;
