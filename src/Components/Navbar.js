import React from 'react'
import { Link } from "react-router-dom";
const Navbar = (props) => {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">ZipperNews</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ fontSize: '20px', fontWeight: '600' }}>
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="business/">Business</Link></li>
              <li className="nav-item"><Link className="nav-link" to="entertainment/">Entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link" to="general/">General</Link></li>
              <li className="nav-item"><Link className="nav-link" to="health/">Health</Link></li>
              <li className="nav-item"><Link className="nav-link" to="science/">Science</Link></li>
              <li className="nav-item"><Link className="nav-link" to="sports/">Sports</Link></li>
              <li className="nav-item"><Link className="nav-link" to="technology/">Technology</Link></li>
            </ul>

            <div
          className={`form-check form-switch text-${
            props.mode === "light" ? "Dark" : "light"
          }`}
        >
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.toggleMode}
          />
          <label
            className="form-check-label"
            htmlFor="flexSwitchCheckDefault"
          >
           Toggle Mode
          </label>
        </div>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar