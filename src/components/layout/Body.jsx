import { useState } from "react";
import SearchBox from "../common/SearchBox";
import SideBar from "../common/SideBar";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

const Body = () => {
  const [isMessageSent, setIsMessageSent] = useState(false);
  return (
    <div
      className={`h-[95vh] flex justify-center transition-all duration-500 ease-out ${
        isMessageSent ? "items-end pb-7" : " items-center"
      }`}
    >
      <SideBar />
      <div className="relative">
        <SearchBox />
        <FaRegArrowAltCircleUp
          onClick={() => setIsMessageSent(true)}
          className="absolute right-4 top-12 cursor-pointer hover:scale-110 active:scale-150 transition-all ease-out duration-300"
          size={27}
        />
      </div>
    </div>
  );
};

export default Body;
