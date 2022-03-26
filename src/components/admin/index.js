import { Outlet } from "react-router-dom";
import Sidebar from "../drawer";

const Admin = () => {
  return (
    <>
      <Sidebar>
        <Outlet />
      </Sidebar>
    </>
  );
};

export default Admin;
