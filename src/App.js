import {Route, Routes} from "react-router-dom";
import {Box} from "@chakra-ui/react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
      <Box minH={"100vh"}>
          <Routes>
              <Route exact path="/login" element={<LoginPage/>} />
              <Route exact path="/register" element={<RegisterPage/>} />
              <Route exact path="/dashboard" element={<Dashboard/>} />
          </Routes>
      </Box>
  );
}

export default App;
