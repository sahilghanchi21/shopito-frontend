import React from "react";
import "./FooterLinks.scss";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../../assets/shopito_logo.png";
const FooterLinks = () => {
  return (
    <>
      <section className="contact-section">
        <div className="container contact">
          <div className="cotact-icon">
            <FaFacebookF className="i" />
            <FaTwitter className="i" />
            <FaInstagram className="i" />
            <FaYoutube className="i" />
          </div>
          <h2>Let's Talk?</h2>
          <a href="" className="btn btn-dark">
            Make an enquiry!
          </a>
        </div>
      </section>
      <section className="footer-section">
        <div className="container footer">
          <div className="footer-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="footer-menu">
            <p className="link-heading">Features</p>
            <ul className="nav-ul footer-links">
              <li>
                {" "}
                <a href="#home">Link Shortesting</a>
              </li>
              <li>
                {" "}
                <a href="#home">Branded Links</a>
              </li>
              <li>
                {" "}
                <a href="#home">Analystic</a>
              </li>
              <li>
                {" "}
                <a href="#home"></a>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <p className="link-heading">Resources</p>
            <ul className="nav-ul footer-links">
              <li>
                {" "}
                <a href="#home">Link Shortesting</a>
              </li>
              <li>
                {" "}
                <a href="#home">Branded Links</a>
              </li>
              <li>
                {" "}
                <a href="#home">Analystic</a>
              </li>
              <li>
                {" "}
                <a href="#home"></a>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <p className="link-heading">Company</p>
            <ul className="nav-ul footer-links">
              <li>
                {" "}
                <a href="#home">Link Shortesting</a>
              </li>
              <li>
                {" "}
                <a href="#home">Branded Links</a>
              </li>
              <li>
                {" "}
                <a href="#home">Analystic</a>
              </li>
              <li>
                {" "}
                <a href="#home"></a>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <p className="link-heading">Partners</p>
            <ul className="nav-ul footer-links">
              <li>
                {" "}
                <a href="#home">Link Shortesting</a>
              </li>
              <li>
                {" "}
                <a href="#home">Branded Links</a>
              </li>
              <li>
                {" "}
                <a href="#home">Analystic</a>
              </li>
              <li>
                {" "}
                <a href="#home"></a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterLinks;
