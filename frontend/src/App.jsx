import "./App.css";
import AllRoutes from "./AllRoutes/AllRoutes";
import Navbar from "./components/Navbar";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Navbar />
      <Box>
        <AllRoutes />
      </Box>
    </>
  );
}

export default App;
