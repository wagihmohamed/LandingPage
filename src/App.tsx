import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/homePage";
import { Login } from "./pages/loginPage";
import { RegisterPage } from "./pages/registerPage";
import { homePath, loginPath, registerPath } from "./utlis/routes";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={homePath} element={<Home />} />
        <Route path={loginPath} element={<Login />} />
        <Route path={registerPath} element={<RegisterPage />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
