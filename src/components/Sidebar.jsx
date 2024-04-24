import { Link } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <>
      <div className="navbar">
        <Link className="logo" to="/"></Link>
        <div className="menu">
          <Link className="link" to="/about">
            ABOUT
          </Link>
          <Link className="link" to="/projects">
            PROJECTS
          </Link>
          <Link className="link" to="art">
            ART
          </Link>
          <Link className="link" to="/contact">
            CONTACT
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
