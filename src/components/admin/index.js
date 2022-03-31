import { Outlet } from "react-router-dom";
import { AccountCircle } from "@mui/icons-material";
import Sidebar from "../sidebar";

const Admin = () => {
  const sidebarOptions = [
    {
      name: "Profile",
      icon: <AccountCircle />,
      link: "/admin/profile",
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
