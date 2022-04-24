import { Outlet } from "react-router-dom";
import { AccountBox, AccountCircle } from "@mui/icons-material";
import Sidebar from "../sidebar";

const Admin = () => {
  const sidebarOptions = [
    {
      name: "Profile",
      icon: <AccountCircle />,
      link: "/admin/profile",
    },
    {
      name: "Manage Users",
      icon: <AccountBox />,
      link: "/admin/manageuser",
    },
  ];

  return (
    <>
      <Sidebar sidebarOptions={sidebarOptions} title="Admin Dashboard">
        <Outlet />
      </Sidebar>
    </>
  );
};

export default Admin;
