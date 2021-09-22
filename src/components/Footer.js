import React from "react"
import facebook from "../images/facebook.svg"
import linkedin from "../images/linkedin.svg"
import pinterest from "../images/pinterest.svg"
import email from "../images/email.svg"
const Footer = () => {
  return (
    <div class="footer">
      <div class="container-fluid">
        <div class="costume-flex-row">
          <div class="facebook">
            <a href="#">
              <img src={facebook} className="social-icons" />
            </a>
          </div>

          <div class="linkedin">
            <a href="#">
              <img src={linkedin} className="social-icons" />
            </a>
          </div>

          <div class="pinterest">
            <a href="#">
              <img src={pinterest} className="social-icons" />
            </a>
          </div>

          <div class="email-icon">
            <a href="#">
              <img src={email} className="social-icons" />
            </a>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6 col-md-6 text-center">
            <div class="personal-contact phone">
              <h4>Phone: XXXXXX</h4>
            </div>
          </div>

          <div class="col-sm-6 col-md-6 text-center">
            <div class="personal-contact email-personal-contact">
              <h4>Email: XXXXX@gmail.com</h4>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-4 col-md-4 text-center">
            <div class="company-information">
              <h3>XXXX</h3>
              <h4>Copyright &copy; 2021</h4>
              <h4>NY</h4>
            </div>
          </div>

          <div class="col-sm-2 col-md-2 text-center">
            <div class="home-footer">
              <h4>
                <a href="#">Home</a>
              </h4>
            </div>
          </div>

          <div class="col-sm-2 col-md-2 text-center">
            <div class="portfolio-footer">
              <h4>
                <a href="#">Portfolio</a>
              </h4>
              <ul>
                <li>
                  <a href="#">Project1</a>
                </li>
                <li>
                  <a href="#">Project2</a>
                </li>
                <li>
                  <a href="#">Project3</a>
                </li>
                <li>
                  <a href="#">See All</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-sm-2 col-md-2 text-center">
            <div class="resume-footer">
              <h4>
                <a href="#">Resume</a>
              </h4>
              <ul>
                <li>
                  <a href="#">Download</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-sm-2 col-md-2 text-center">
            <div class="contact-footer">
              <h4>
                <a href="#">Contact</a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
