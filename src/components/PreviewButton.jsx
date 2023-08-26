import showView from "../assets/view.svg";
import hideView from "../assets/hide.svg";
import { useSelector, useDispatch } from "react-redux";
import { togglePreview } from "../features/preview";

export default function PreviewButton() {
  const previewData = useSelector((state) => state.preview);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(togglePreview())}
      className="bg-blue-600 text-slate-50 px-3 py-1 rounded mx-auto flex items-center select-none"
    >
      <img className="w-5 mr-3" src={previewData.preview ? hideView : showView} alt="" />
      <span> {previewData.preview ? "Hide" : "Show"} Preview</span>
    </button>
  );
}
