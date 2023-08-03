import "./Contact.css";
import Git from "../img/Git.png";
import Ig from "../img/Ig.png";
import Email from "../img/Email.png";
import Telp from "../img/Telp.png";

const Link = (props) => {
  return (
    <a href={props.url} target="_blank">
      {props.children}
    </a>
  );
};

const handleEmailClick = () => {
  window.prompt("Email: ", "korakot.jarunongkran@gmail.com");
};
const handleTelpClick = () => {
  window.prompt("Telp: ", "+66 639975999");
};

function Contact() {
  return (
    <div className="Contact">
      <div className="Topic-c">
        <h1>Contact Me</h1>
        <div className="Choices-c">
          <div className="Box-c">
            <Link url="https://github.com/LillyKJ">
              <img src={Git} alt="Git" />
            </Link>
            <h1>Github</h1>
          </div>
          <div className="Box-c">
            <Link url="https://www.instagram.com/likoralkolyt/">
              <img src={Ig} alt="Git" />
            </Link>
            <h1>Instagram</h1>
          </div>
          <div className="Box-c">
              <img src={Email} alt="Git" onClick={handleEmailClick} />
            <h1>Email</h1>
          </div>
          <div className="Box-c">
            <img src={Telp} alt="Git" onClick={handleTelpClick}/>
            <h1>Telp</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
