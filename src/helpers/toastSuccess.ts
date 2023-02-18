import { toast } from "react-toastify";

export const pinSuccess = () => {
  toast.success("Correct PIN", {
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
