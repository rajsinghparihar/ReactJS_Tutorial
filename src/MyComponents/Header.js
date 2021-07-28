import React from "react";

export default function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* // eslint-disable-next-line */}
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* // eslint-disable-next-line */}
                <a className="nav-link active" aria-current="page" href="https://github.com/rajsinghparihar">
                  About
                </a>
              </li>
              <li className="nav-item">
                {/* // eslint-disable-next-line */}
                <a className="nav-link" href="https://rajsinghparihar.netlify.app">
                  KhiKhiKhi
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
