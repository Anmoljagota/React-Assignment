import "./App.css";
import AllRoutes from "./AllRoutes/AllRoutes";
import Navbar from "./components/Navbar";
import { Box } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  console.log(location.pathname !== "/login", "location");
  return (
    <>
      {location.pathname !== "/login" &&
        (location.pathname !== "/register" && <Navbar />)}
      <Box>
        <AllRoutes />
      </Box>
    </>
  );
}

export default App;
