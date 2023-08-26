import { useDispatch } from "react-redux";
import { hidePreview } from "../features/preview";

export default function ButtonTab({ id, toggleTab, buttonContent, imgURL }) {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        toggleTab(id);
        dispatch(hidePreview());
      }}
      className="flex items-center px-5 py-3 hover:bg-slate-600 focus:bg-slate-600 outline-none"
    >
      <img className="w-5" src={imgURL} alt="" />
      <span className="ml-3 text-slate-100 text-md"> {buttonContent} </span>
    </button>
  );
}
