import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

document.addEventListener("mousemove", function (event) {
  var mouseX = event.clientX; // X-Position des Mauszeigers
  var mouseY = event.clientY; // Y-Position des Mauszeigers

  // Verzögerung in Millisekunden (hier 1000 Millisekunden für 1 Sekunde)
  var delay = 80;

  // Timeout-Event, um den Kreisfolger mit Verzögerung der Maus zu folgen
  setTimeout(function () {
    var follower = document.getElementById("follower");
    follower.style.left = mouseX + "px"; // Kreisfolger der Maus in X-Richtung folgen lassen
    follower.style.top = mouseY + "px"; // Kreisfolger der Maus in Y-Richtung folgen lassen
  }, delay);
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
