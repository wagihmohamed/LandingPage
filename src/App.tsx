import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { homePath, loginPath, registerPath } from "./utlis/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={homePath} element={<Home />} />
        <Route path={loginPath} element={<Login />} />
        <Route path={registerPath} element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
