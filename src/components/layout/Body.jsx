// import React, { useEffect, useState } from "react";
// import SideBar from "../layout/SideBar";
import Button from "../common/Button";
import Hamburger from "../common/Hamburger";
// import Carousel from "../common/Carousel";

const Body = () => {
  // const [nav, setNav] = useState(false);
  return (
    <div className="h-[90vh] flex items-center justify-center">
      {/* <Carousel /> */}
      <Button title='Click here' />
      <Hamburger />
    </div>
  );
};

export default Body;
