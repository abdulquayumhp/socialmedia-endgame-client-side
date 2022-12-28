import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 postBgImage  text-base-content w-11/12 md:w-9/12 mx-auto bg-white rounded-lg b-5">
        <div>
          <Link
            to="/"
            className="ml-3 text-xl lg:text-2xl font-medium pl-5 xl:pl-10"
          >
            <span className="text-amber-800">POST</span>{" "}
            <span className="text-amber-500">OPI</span>
            <span className="text-black">AI</span>
          </Link>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
