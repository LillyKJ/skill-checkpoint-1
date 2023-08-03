import "./Contact.css";
import Git from "../img/Git.png";
import Ig from "../img/Ig.png";
import Email from "../img/Email.png";
import Telp from "../img/Telp.png";

function Contact() {
  return (
    <div className="Contact">
      <div className="Topic-c">
        <h1>Contact Me</h1>
        <div className="Choices-c">
          <div className="Box-c">
            <img src={Git} alt="Git" />
            <h1>Github</h1>
          </div>
          <div className="Box-c">
            <img src={Ig} alt="Git" />
            <h1>Instagram</h1>
          </div>
          <div className="Box-c">
            <img src={Email} alt="Git" />
            <h1>Email</h1>
          </div>
          <div className="Box-c">
            <img src={Telp} alt="Git" />
            <h1>Telp</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
