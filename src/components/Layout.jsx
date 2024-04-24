import Home from "./Home";
import "./Layout.scss";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div>
      <Sidebar />
      <Home />
    </div>
  );
};

export default Layout;
