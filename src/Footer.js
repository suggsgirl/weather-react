import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <small>
        Coded by Claire Phillips and is {""}
        <a
          href="https://github.com/suggsgirl/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
      </small>
    </div>
  );
}
