import "./App.css";
import AllRoutes from "./AllRoutes/AllRoutes";
import Navbar from "./components/Navbar";
import { Box } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  console.log(location, "location");
  return (
    <>
      {!location.pathname === "/login" && <Navbar />}
      <Box>
        <AllRoutes />
      </Box>
    </>
  );
}

export default App;
