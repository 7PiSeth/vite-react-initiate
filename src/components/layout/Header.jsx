import React from "react";
import ToggleTheme from "../common/ToggleTheme";

const Header = () => {
  return (
    <div className="h-[5vh] flex items-center justify-center">
      <ToggleTheme />
    </div>
  )
}

export default Header