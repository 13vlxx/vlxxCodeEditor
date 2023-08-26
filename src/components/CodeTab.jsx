import { useDispatch } from "react-redux";
import { updateCode } from "../features/tabs";

export default function CodeTab({ code, id }) {
  const dispatch = useDispatch();

  return (
    <textarea
      onChange={(e) => dispatch(updateCode({ id, value: e.target.value }))}
      value={code}
      spellCheck="false"
      className="bg-zinc-900 text-slate-200 text-xl p-8 h-full w-full focus:outline-none resize-none"
    ></textarea>
  );
}
