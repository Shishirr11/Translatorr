import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-1 width-100%">
        <div className="container-fluid">
          <a className="navbar-brand" href="/Firstpage">
            {props.title}
          </a>
          <div className="collapse navbar-collapse" width="100%">
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
              <li className="nav-link-active">
                <a className="nav-link p-3" href="/Firstpage">
                  Home
                </a>
              </li>
              <li className="nav-link-active">
                <a className="nav-link p-3" href="/Chatgpt">
                  Chatgpt
                </a>
              </li>
              <li className="nav-link-active">
                <a className="nav-link p-3" href="/Livetrans">
                  LiveTranslation
                </a>
              </li>
            </ul>
          </div>
          <a
            className="nav-item mr-3 nav-link p-3"
            style={{ color: "white" }}
            href="/Signin"
          >
            Logout
          </a>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  abouttext: PropTypes.string.isRequired,
};

Navbar.defaultProps = { title: "set title here", abouttext: "About" };
