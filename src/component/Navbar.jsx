import "./Navbar.css";
import { Link } from "react-router-dom";

function Navigator() {
  return (
    <div className="Navbar">
      <div className="Logo">
        <h1>Korakot J.</h1>
      </div>
      <ul className="Tab">
        <Link to="/resume"><li>About</li></Link>
        <li>Passions</li>
        <li>Portfolio</li>
        <button>contact Me</button>
      </ul>
    </div>
  );
}

export default Navigator;
