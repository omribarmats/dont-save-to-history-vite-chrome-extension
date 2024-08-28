import { useState } from "react";
import "./options.css";
import HowItWorks from "./tabs/HowItWorks";
import YourPrivacy from "./tabs/YourPrivacy";
import FAQ from "./tabs/FAQ";

const Options = () => {
  const menu = ["How it works", "Your privacy", "FAQ"];
  const [tab, setTab] = useState("How it works");

  const handleTabSelect = (
    e: React.MouseEvent<HTMLButtonElement>,
    name: string
  ) => {
    e.preventDefault();
    setTab(name);
  };

  return (
    <div className="flex flex-col gap-10 my-10">
      <div className="flex flex-row items-center justify-center mx-auto w-full select-none">
        <img
          src="192-dont-save-to-history.png"
          alt="Logo"
          width={100}
          height={100}
        />
      </div>
      <div className="select-none">
        <h1 className="flex flex-col gap-5 text-center text-7xl font-black text-white">
          <span className="heading-line px-1 w-max mx-auto">
            Don't Save to History
          </span>
          <span className="">Chrome Extension</span>
        </h1>
      </div>
      <div className="flex flex-row gap-5 items-center mx-auto w-max">
        {menu.map((item, index) => {
          return (
            <button
              key={index}
              onClick={(e) => handleTabSelect(e, item)}
              className={`transition-bg ease-in-out duration-1000 text-center text-4xl font-black text-white select-none ${
                tab == item && "bg-[#7A9BE9]"
              } hover:bg-[#7A9BE9] p-2`}
            >
              {item}
            </button>
          );
        })}
      </div>
      {tab == "How it works" && <HowItWorks />}
      {tab == "Your privacy" && <YourPrivacy />}
      {tab == "FAQ" && <FAQ />}
    </div>
  );
};

export default Options;
