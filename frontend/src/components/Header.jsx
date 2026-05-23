import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo">
        User Management System
      </Link>
      <div className="header-right">
        <Link to="/" className="active">
          Home
        </Link>
        <Link to="/" className="active">
          Add New User
        </Link>
      </div>
    </div>
  );
};

export default Header;
