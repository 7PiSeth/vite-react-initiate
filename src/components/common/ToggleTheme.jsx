import { useEffect, useState } from "react";
import { FaSun } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="relative w-20 bg-slate-300 dark:bg-slate-800 group rounded-full flex items-center cursor-pointer">
      <div
        className="w-1/2 h-full p-2 z-10"
        onClick={() => {
          document.querySelector("meta[name='theme-color']").content =
            "#E3E8EF";
          setDarkMode(false);
        }}
      >
        <FaSun size={20} />
      </div>

      <div
        className="w-1/2 h-full p-2 z-10"
        onClick={() => {
          document.querySelector("meta[name='theme-color']").content =
            "#0D1117";
          setDarkMode(true);
        }}
      >
        <BsFillMoonStarsFill size={20} className="float-right" />
      </div>
      <div
        className={`bg-slate-200 dark:bg-[#171d25] p-4 rounded-full shadow-inner transform-gpu transition-transform duration-300 ease-in-out absolute left-[2px] ${
          darkMode ? "translate-x-[44px] shadow-[#fcfcfc33]" : ""
        }`}
      ></div>
    </div>
  );
};

export default Header;
