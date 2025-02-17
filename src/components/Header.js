import React from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-dark text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h3">Talent Profile App</h1>
        <nav>
          <ul className="nav">
            <li className="nav-item">
            <Link
                to="/"
                className={`nav-link px-3 rounded ${location.pathname === "/" ? "active bg-light text-dark" : "text-white"}`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
            <Link
                to="/profile"
                className={`nav-link px-3 rounded ${location.pathname === "/profile" ? "active bg-light text-dark" : "text-white"}`}
              >
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;