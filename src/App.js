import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { SideBar } from "./components/SideBar";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";

const drawerWidth = 240;

function App() {
  return (
    <>
      <ScrollTop />
    </>
  );
}

export default App;
