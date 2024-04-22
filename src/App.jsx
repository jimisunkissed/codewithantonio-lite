import { useLocation } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import MainRouter from "./routers/MainRouter";
import WithSideBar from "./components/Layouts/WithSideBar";
import NoSideBar from "./components/Layouts/NoSideBar";
import Upgrade from "./pages/Upgrade/Upgrade";

function App() {
  const location = useLocation();

  // Page Interface
  return (
    <>
      <Box display={{ base: "none", lg: "flex" }}>
        {location.pathname === "/upgrade" ? (
          <NoSideBar>
            <Upgrade />
          </NoSideBar>
        ) : (
          <WithSideBar>
            <MainRouter />
          </WithSideBar>
        )}
      </Box>
      <Box display={{ base: "flex", lg: "none" }}>
        <NoSideBar>
          <MainRouter />
        </NoSideBar>
      </Box>
    </>
  );
}

export default App;
