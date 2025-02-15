import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-auto">
      <div className="container">
        <p className="mb-1">&copy; {new Date().getFullYear()} Career Finder. All Rights Reserved.</p>
        <div>
          <a href="#" className="text-light mx-2 text-decoration-none">
            About
          </a>
          <a href="#" className="text-light mx-2 text-decoration-none">
            Contact
          </a>
          <a href="#" className="text-light mx-2 text-decoration-none">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
