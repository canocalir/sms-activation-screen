import { toast } from "react-toastify";

export const pinError = () => {
  toast.error("Enter correct PIN!", {
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
