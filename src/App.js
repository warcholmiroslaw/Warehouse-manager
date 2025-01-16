import {Route, Routes} from "react-router-dom";
import {Box} from "@chakra-ui/react";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
      <Box minH={"100vh"}>
          <Routes>
              <Route exact path="/" element={<LoginPage/>} />
          </Routes>
      </Box>
  );
}

export default App;
