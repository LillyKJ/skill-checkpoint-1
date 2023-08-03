import "./Resumepage.css"
function Resume() {
  return (
    <div className="container">
      <div className="left_Side">
        <div className="profileText">
          <div className="imgBx">
            <img
              className="photo"
              src="images/image.jpg"
              alt="Ekaterina Antonova"
            />
          </div>
          <br />
          <h2>
            Ekaterina Antonova <br />
            <span>Web Developer</span>{" "}
          </h2>
        </div>

        <div className="contactInfo">
          <h3 className="title">Contact Info</h3>
          <ul>
            <li>
              <span className="icon">
                <i className="fa fa-phone" aria-hidden="true"></i>
              </span>
              <span className="text">+1 234 567 89</span>
            </li>
            <li>
              <span className="icon">
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
              </span>
              <span className="text">jon_doe@example.com</span>
            </li>
            <li>
              <span className="icon">
                <i className="fa fa-globe" aria-hidden="true"></i>
              </span>
              <span className="text">www.mywebsite.com</span>
            </li>
            <li>
              <span className="icon">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </span>
              <span className="text">www.linkedin/me</span>
            </li>
            <li>
              <span className="icon">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
              </span>
              <span className="text">Moscow, Russia</span>
            </li>
          </ul>
        </div>
        <div className="contactInfo education">
          <h3 className="title">Education</h3>
          <ul>
            <li>
              <h5>2010 - 2013</h5>
              <h4>Master Degree in Computer Science</h4>
              <h4>University Name</h4>
            </li>
            <li>
              <h5>2007 - 2013</h5>
              <h4>Bachelor Degree Computer Science</h4>
              <h4>University Name</h4>
            </li>
            <li>
              <h5>1997 - 2007</h5>
              <h4>Matriculation</h4>
              <h4>University Name</h4>
            </li>
          </ul>
        </div>
        <div className="contactInfo language">
          <h3 className="title">Languages</h3>
          <ul>
            <li>
              <span className="text">English</span>
              <span className="percent">
                <div className="englishw50"></div>
              </span>
            </li>
          </ul>
          <ul>
            <li>
              <span className="text">Russian</span>
              <span className="percent">
                <div className="russianw90"></div>
              </span>
            </li>
          </ul>
          <ul>
            <li>
              <span className="text">French</span>
              <span className="percent">
                <div className="frenchw30"></div>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="right_Side">{/* Right Side Content Here */}</div>
    </div>
  );
}

export default Resume;
