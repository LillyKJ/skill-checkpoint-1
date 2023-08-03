import "./About.css";
import logoImage from "../img/HeroImage.png";

function About() {
  return (
    <div className="About">
      <div className="Greeting">
        <h1 className="Hi">Hi !</h1>
        <h1 className="Name">
          I'm Korakot Jarunongkran <br /> a Full-Stack Developer
        </h1>
        <p>
          a developer or engineer who can build both the front end and the back
          end of a website.
        </p>
      </div>
      <div className="Logo">
        <img src={logoImage} alt="Logo" />
      </div>
    </div>
  );
}

export default About;
