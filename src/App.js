import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Crud from "./components/crud";
import Header from "./components/header";
import Main from "./components/main";
import Login from "./components/main/login";
import Signup from "./components/main/signup";
import Manage from "./components/manage";
import UsingScene from "./components/usingScene";

function App() {
  const theme1 = createTheme({
    palette: {
      text: {
        primary: "#555555",
      },
    },
  });

  return (
    <ThemeProvider theme={theme1}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Crud />} path="/crud" />
          <Route element={<Manage />} path="/manage" />
          <Route element={<UsingScene />} path="/scene" />
          <Route element={<Main />} path="main">
            <Route element={<Signup />} path="signup" />
            <Route element={<Login />} path="login" />
          </Route>

          <Route path="/" element={<Navigate replace to="/manage" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
