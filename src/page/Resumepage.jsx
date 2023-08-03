import "./Resumepage.css";
function Resume() {
  return (
    <div className="container">
      <div className="left_Side">
        <div className="profileText">
          <div className="imgBx">
            <img className="photo" src="images/image.jpg" alt="picture" />
          </div>
          <br />
          <h2>
            Korakot Jarunongkran <br />
            <span>Software Developer</span>
          </h2>
        </div>

        <div className="contactInfo">
          <h3 className="title">Contact Info</h3>
          <ul>
            <li>
              <span className="icon">
                <i className="fa fa-phone"></i>
              </span>
              <span className="text">+66 63 997 5999</span>
            </li>
            <li>
              <span className="icon">
                <i className="fa fa-envelope-o"></i>
              </span>
              <span className="text">koarkot.jarunongkran@gmail.com</span>
            </li>
            <li>
              <span className="icon">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
              </span>
            </li>
          </ul>
        </div>
        <div className="contactInfo education">
          <h3 className="title">Education</h3>
          <ul>
            <li>
              <h5>2562-2565</h5>
              <h4>
                Bachelor of Science <br />
                (Food Industry)
              </h4>
              <h4>King Mongkut's Institute of Technology Ladkrabang</h4>
            </li>
            <li>
              <h5>2557-2562</h5>
              <h4>High School</h4>
              <h4>Sarasas Witaed Saimai School</h4>
            </li>
            <li>
              <h5>2551-2557</h5>
              <h4>Junior High School</h4>
              <h4>Fuangfha Wittaya School</h4>
            </li>
          </ul>
        </div>
        <div className="contactInfo language">
          <h3 className="title">Languages</h3>
          <ul>
            <li>
              <span className="text">Thai</span>
              <span className="percent">
                <div className="englishw50"></div>
              </span>
            </li>
          </ul>
          <ul>
            <li>
              <span className="text">English</span>
              <span className="percent">
                <div className="russianw90"></div>
              </span>
            </li>
          </ul>
          <ul>
            <li>
              <span className="text">Chinese</span>
              <span className="percent">
                <div className="frenchw30"></div>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="right_Side">
        <div class="about">
          <h2 class="title2">Profile</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <br /> <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <div class="about">
          <h2 class="title2">Experience</h2>
          <div class="box">
            <div class="year_company">
              <h5>June 2022 - August 2022</h5>
              <h5>Unilever</h5>
            </div>
            <div class="text">
              <h4>Power BI</h4>
              <p>
                Create experimental results Dashboard by Power BI
              </p>
            </div>
          </div>

          <div class="box">
            <div class="year_company">
              <h5>January 2023 <br />- April 2023</h5>
              <h5>Factory <br />Classroom</h5>
            </div>
            <div class="text">
              <h4>Research Assistance</h4>
              <p>
                Help Researcher to observation result of experimental and Laboratory
              </p>
            </div>
          </div>
        </div>
        <div class="about skills">
          <h2 class="title2">Professionals skills</h2>
          <div class="box">
            <h4>HTML</h4>
            <div class="percent">
              <div class="htmlws30"></div>
            </div>
          </div>
          <div class="box">
            <h4>CSS</h4>
            <div class="percent">
              <div class="cssws45"></div>
            </div>
          </div>
          <div class="box">
            <h4>JavaScript</h4>
            <div class="percent">
              <div class="jsws70"></div>
            </div>
          </div>
          <div class="box">
            <h4>Photoshop</h4>
            <div class="percent">
              <div class="phws40"></div>
            </div>
          </div>
          <div class="box">
            <h4>Power BI</h4>
            <div class="percent">
              <div class="ilws60"></div>
            </div>
          </div>
          <div class="box">
            <h4>Lightroom</h4>
            <div class="percent">
              <div class="adw70"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
