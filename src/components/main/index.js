import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

const Main = () => {
  return (
    <div>
      {/* <Header></Header> */}
      <Outlet />
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Main;
