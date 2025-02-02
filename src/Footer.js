import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <h1>learnHub</h1>
      <p style={{ fontWeight: "400" }}>
        © 2022 Tailwind Labs Inc. All rights reserved.
      </p>
      <div
        style={{
          display: "flex",
          fontSize: "0.875rem",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        <span>
          <NavLink
            to="/form"
            style={{ textDecoration: "none", color: "white" }}
          >
            form
          </NavLink>
        </span>
        <div
          style={{
            border: "1px solid rgba(241, 245, 249, 0.2)",
            margin: "0 1rem",
            height: "1rem",
          }}
        ></div>
        <span>notes</span>
      </div>
    </footer>
  );
}

export default Footer;
