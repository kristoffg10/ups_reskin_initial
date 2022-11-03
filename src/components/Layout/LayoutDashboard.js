import React from "react";

import Routes from "../../routes/Routers";
import Sidenav from "../Sidebar/Sidenav";

// import { useSelector } from "react-redux";

const Layout = () => {
  return (
    <div>
        <Sidenav />
      <div>
        <Routes />
      </div>
    </div>
  );
};

export default Layout;