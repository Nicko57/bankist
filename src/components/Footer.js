import React from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const toggleHome = () => {
  scroll.scrollToTop();
};

const Footer = () => {
  return (
    <div className="bg-gray-900 py-10">
      <div className="container font-encodeSans mx-auto max-w-3xl flex">
        <div className="flex-1 flex sm:flex-col sm:pl-14">
          <div className="flex-1 sm:mb-7 ">
            <div>
              <h1 className="footer-title">About Us</h1>
            </div>
            <div className="footer-links-col">
              <div>
                <Link to="/" className="footer-links">
                  How it works
                </Link>
              </div>
              <div>
                <Link to="/" className="footer-links">
                  Testimonials
                </Link>
              </div>
              <div>
                <Link to="/" className="footer-links">
                  Careers
                </Link>
              </div>
              <div>
                <Link to="/" className="footer-links">
                  Investors
                </Link>
              </div>
              <div>
                <Link to="/" className="footer-links">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div>
              <h1 className="footer-title">Contact Us</h1>
            </div>
            <div className="footer-links-col">
              <div>
                <Link to="/" className="footer-links">
                  Contact
                </Link>
              </div>
              <div>
                <Link to="/" className="footer-links">
                  Support
                </Link>
              </div>
              <div>
                <Link to="/" className="footer-links">
                  Destinations
                </Link>
              </div>
              <div>
                <Link to="/" className="footer-links">
                  Sponsorships
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex sm:flex-col sm:pl-9">
          <div className="flex-1">
            <div>
              <h1 className="footer-title">Videos</h1>
            </div>
            <div className="footer-links-col">
              <div>
                <Link to="/" className="footer-links">
                  Submit Video
                </Link>
              </div>
              <div>
                <Link to="/" className="footer-links">
                  Ambassadors
                </Link>
              </div>
              <div>
                <Link to="/" className="footer-links">
                  Agency
                </Link>
              </div>
              <div>
                <Link to="/" className="footer-links">
                  Influencer
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div>
              <h1 className="footer-title">Social Media</h1>
            </div>
            <div className="footer-links-col">
              <div>
                <Link to="/" className="footer-links">
                  Instagram
                </Link>
              </div>
              <div>
                <Link to="/" className="footer-links">
                  Facebook
                </Link>
              </div>
              <div>
                <Link to="/" className="footer-links">
                  Youtube
                </Link>
              </div>
              <div>
                <Link to="/" className="footer-links">
                  Twitter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container font-encodeSans mt-10 mx-auto text-white text-lg flex sm:flex-col sm:text-center">
        <div className="flex-1 sm:mb-5">
          <Link to="/" className="footer-logo" onClick={toggleHome}>
            Bankist
          </Link>
        </div>
        <div className="flex-1 sm:mb-5 sm:text-sm md:text-base">
          <p>Bankist &copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="flex-1 flex justify-end sm:justify-center">
          <a
            href="/"
            target="_blank"
            aria-label="Facebook"
            className="social-links"
          >
            <FaFacebook />
          </a>
          <a
            href="/"
            target="_blank"
            aria-label="Instagram"
            className="social-links"
          >
            <FaInstagram />
          </a>
          <a
            href="/"
            target="_blank"
            aria-label="Youtube"
            className="social-links"
          >
            <FaYoutube />
          </a>
          <a
            href="/"
            target="_blank"
            aria-label="Twitter"
            className="social-links"
          >
            <FaTwitter />
          </a>
          <a
            href="/"
            target="_blank"
            aria-label="Linkedin"
            className="social-links"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
