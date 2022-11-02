import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" data-testid='link'>
            Posts
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
