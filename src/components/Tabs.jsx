import { useSelector } from "react-redux";
import CodeTab from "./CodeTab";
import ButtonTab from "./ButtonTab";
import { useState } from "react";
import Preview from "./Preview";

export default function Tabs() {
  const tabs = useSelector((state) => state.tabs);
  const previewData = useSelector((state) => state.preview);
  const [tabIndex, setTabIndex] = useState(tabs[0].id);

  return (
    <div className="flex grow">
      <div className="grow flex flex-col w-[175px] shrink-0 text-slate-300 border-r border-slate-200">
        {tabs.map((tab) => (
          <ButtonTab
            key={tab.id}
            id={tab.id}
            toggleTab={(id) => setTabIndex(id)}
            imgURL={tab.imgURL}
            buttonContent={tab.buttonContent}
          />
        ))}
      </div>
      <div className="w-full grow relative">
        <CodeTab id={tabIndex} code={tabs.find((obj) => obj.id === tabIndex).code} />
        {previewData.preview && <Preview />}
      </div>
    </div>
  );
}
