import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Admin from "./components/admin";
import AdminDashboard from "./components/admin/dashboard";
import ManageUser from "./components/admin/manageUser";
import Crud from "./components/crud";
import Header from "./components/header";
import Main from "./components/main";
import Login from "./components/main/login";
import Signup from "./components/main/signup";
import Manage from "./components/manage";
import User from "./components/user";
import AddBlog from "./components/user/addBlog";
import UsingScene from "./components/usingScene";

function App() {
  const theme1 = createTheme({
    palette: {
      text: {
        primary: "#4d0fe9",
      },
    },
  });

  return (
    <ThemeProvider theme={theme1}>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              //   <CSSTransition
              //   timeout={300}
              //   classNames="page"
              //   unmountOnExit>
              //     <Crud />
              //   </CSSTransition>
              <Crud />
            }
            path="/crud"
          />
          <Route element={<Manage />} path="/manage" />
          <Route element={<UsingScene />} path="/scene" />
          <Route element={<Main />} path="main">
            <Route element={<Signup />} path="signup" />
            <Route element={<Login />} path="login" />
          </Route>

          <Route element={<User />} path="user">
            <Route element={<AddBlog />} path="addblog" />
          </Route>

          <Route element={<Admin />} path="admin">
            <Route element={<AdminDashboard />} path="dashboard" />
            <Route element={<ManageUser />} path="manageuser" />
            <Route path="admin" element={<Navigate to="/admin/dashboard" />} />
          </Route>

          <Route path="/" element={<Navigate replace to="/manage" />} />
          <Route
            path="/login"
            element={<Navigate replace to="/main/login" />}
          />

          <Route />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
