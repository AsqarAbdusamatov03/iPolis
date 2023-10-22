import { toast } from "react-toastify";
const toastify = (data) =>
  toast(data.text, {
    className: data.status ? "toast-info" : "toast-error",
    draggable: true,
    position: toast.POSITION.TOP_RIGHT,
    type: data.status ? toast.TYPE.INFO : toast.TYPE.ERROR,
    autoClose: data.time ? data.time : 5000,
    hideProgressBar: false,
    // closeOnClick: true,
  });

export default toastify;
