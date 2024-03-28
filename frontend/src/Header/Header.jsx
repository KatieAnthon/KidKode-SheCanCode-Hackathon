import "./Header.css";
import logo from "../assets/logo.png"

const KidkodeHeader = () => {
  return (
    <header className="header">
      <div className="header">
      <img src={logo} alt="Kidkode Logo" />
        </div>
        <div>
        <button className="header-grown-up-page">For Grown-Ups</button>
      </div>
    </header>
  );
};

export default KidkodeHeader;
