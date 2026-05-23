import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const active = location.pathname === "/add" ? "Add" : "Home";

  return (
    <div className="header">
      <Link to="/" className="logo">
        User Management System
      </Link>
      <div className="header-right">
        <Link to="/" className={active === "Home" ? "active" : ""}>
          Home
        </Link>
        <Link to="/add" className={active === "Add" ? "active" : ""}>
          Add New User
        </Link>
      </div>
    </div>
  );
};

export default Header;
