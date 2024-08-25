import logo from "../assets/images/tennis-logo.png";
import "../styles/header.css";

function Header() {
  return (
    <header className="app-header">
      <img src={logo} alt="logo" />
    </header>
  );
}

export default Header;
