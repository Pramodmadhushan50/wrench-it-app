import React, { useState } from "react";
import "../styles/Feedback.css";

export default function Feedback() {
  return (
    <div className="feedback-container">
      <div className="giphy-container">
        <iframe
          src="https://giphy.com/embed/etOX3h7ApZuDe7Fc5w"
          width="399"
          height="480"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
        <p>
          <a href="https://giphy.com/gifs/dancing-kermit-etOX3h7ApZuDe7Fc5w">
            via GIPHY
          </a>
        </p>
      </div>
    </div>
  );
}
