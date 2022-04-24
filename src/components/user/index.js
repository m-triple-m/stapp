import { AccountBox, AccountCircle } from "@mui/icons-material";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";

const User = () => {
  const sidebarOptions = [
    {
      name: "Profile",
      icon: <AccountCircle />,
      link: "/user/profile",
    },
    {
      name: "Manage Users",
      icon: <AccountBox />,
      link: "/user/manageuser",
    },
  ];

  return (
    <>
      <Sidebar sidebarOptions={sidebarOptions} title="User Dashboard">
        <Outlet />
      </Sidebar>
    </>
  );
};

export default User;
