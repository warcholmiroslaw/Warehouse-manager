import {Route, Routes} from "react-router-dom";
import {Box} from "@chakra-ui/react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
      <Box minH={"100vh"}>
          <Routes>
              <Route exact path="/login" element={<LoginPage/>} />
              <Route exact path="/register" element={<RegisterPage/>} />
          </Routes>
      </Box>
  );
}

export default App;
