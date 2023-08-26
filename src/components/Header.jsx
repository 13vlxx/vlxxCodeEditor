import PreviewButton from "./PreviewButton";

export default function Header() {
  return (
    <header className="px-4 py-4 border-b flex items-center">
      <h1 className="w-full text-slate-50 text-2xl">
        <span className="text-base">vlxx</span>CodeEditor
      </h1>
      <div className="w-full">
        <PreviewButton />
      </div>
      <div className="w-full flex">
        <div className="ml-auto mr-2">
          <div className="w-[6px] h-[6px] bg-slate-200 rounded-full my-1"></div>
          <div className="w-[6px] h-[6px] bg-slate-200 rounded-full my-1"></div>
          <div className="w-[6px] h-[6px] bg-slate-200 rounded-full"></div>
        </div>
      </div>
    </header>
  );
}
