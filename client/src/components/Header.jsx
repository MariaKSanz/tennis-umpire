import { Link } from "react-router-dom";
import logo from "../assets/images/tennis-logo.png";
import "../styles/header.css";

function Header() {
  return (
    <header className="app-header">
      <Link to="/" className="logo">
        <img src={logo} alt="logo" className="logo" />
      </Link>
    </header>
  );
}

export default Header;
