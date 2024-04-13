import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { SideBar } from "./components/SideBar";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";
import ScrollTop from "./components/ScrollTop";
import StakeModal from "./components/StakeModal";
import CompleteStakeModal from "./components/CompleteStakeModal";

const drawerWidth = 20;
const navTitles = {
  "/": "Connect",
  "/dashboard": "Dashboard",
  "/stake": "Stake",
  "/manage-positions": "Manage Positions",
};

function App() {
  const [auth, setAuth] = React.useState(false);
  const location = window.location.pathname;
  const [title, setTitle] = React.useState(navTitles[location]);

  const [stakeModal, setStakeModal] = React.useState(false);
  const handleStakeModalOpen = () => setStakeModal(true);
  const [completeModal, setCompleteModal] = React.useState(false);
  React.useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <>
      <ScrollTop />
      <Box
        minHeight={"100vh"}
        width={"100vw"}
        sx={{ display: "flex", bgcolor: "secondary.600", color: "#ffffff" }}
      >
        <CssBaseline />
        <Nav
          auth={auth}
          setAuth={setAuth}
          title={title}
          drawerWidth={drawerWidth}
        />
        <SideBar setTitle={setTitle} />
        {/*  show pc only text if viewed on mobile */}
        {window.innerWidth < 768 ? (
          <Box
            display="flex"
            alignItems="center"
            color="secondary.main"
            bgcolor="secondary.600"
            padding="1rem"
            width="100%"
            textAlign="center"
          >
            <h1>PC View Only</h1>
          </Box>
        ) : (
          <Box minWidth={"500px"} ml={`${drawerWidth}%`} pt={2} width={"100%"}>
            <Outlet
              context={{ auth, setAuth, stakeModal, handleStakeModalOpen }}
              setTitle={navTitles[window.location.pathname]}
            />
            <StakeModal
              openModal={stakeModal}
              setModalOpen={setStakeModal}
              setCompleteModalOpen={setCompleteModal}
            />
            <CompleteStakeModal
              openModal={completeModal}
              setModalOpen={setCompleteModal}
            />
          </Box>
        )}
      </Box>
    </>
  );
}

export default App;
