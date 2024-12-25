import React from "react";
import ToggleTheme from "../common/ToggleTheme";

const Header = () => {
  return (
    <div className="h-[50px] flex items-center justify-center">
      <ToggleTheme />
    </div>
  )
}

export default Header