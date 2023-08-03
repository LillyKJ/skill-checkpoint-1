import "./Navbar.css";

function Navigator() {
  return (
    <div className="Navbar">
      <div className="Logo">
        <h1>Korakot J.</h1>
      </div>
      <ul className="Tab">
        <li>About</li>
        <li>Passions</li>
        <li>Portfolio</li>
        <button>contact Me</button>
      </ul>
    </div>
  );
}

export default Navigator;
