import {Route, Routes} from "react-router-dom";
import {Box} from "@chakra-ui/react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Products from "./pages/Products";

function App() {
  return (
      <Box minH={"100vh"}>
          <Routes>
              <Route exact path="/login" element={<LoginPage/>} />
              <Route exact path="/register" element={<RegisterPage/>} />

              <Route element={<ProtectedRoutes />}>
                <Route exact path="/dashboard" element={<Dashboard/>} />
                  <Route exact path="/products" element={<Products />} />
              </Route>
          </Routes>
      </Box>
  );
}

export default App;
