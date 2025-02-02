import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="fixedHead">
      <div style={{ padding: "0 1rem" }}>
        <div className="apphead">
          <div>
            <span>
              <NavLink to="/">
                <h1>learnHub</h1>
              </NavLink>
            </span>
          </div>

          <div>
            <span>
              <NavLink to="/form">admin</NavLink>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
