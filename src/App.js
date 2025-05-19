import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App(){
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/ana-daniela-garc%C3%ADa-lara-001336216/"
            target="_blank"
          >
            Ana Daniela Garcia Lara
          </a>{" "}
          and is
          <a
            href="https://github.com/AnaDany98/weather-react-2/tree/main"
            target="_blank"
          >
            {" "}
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}


