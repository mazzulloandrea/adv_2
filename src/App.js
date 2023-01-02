import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
import intro from "./assets/video/intro.mp4";
import MovingBar from "./components/MovingBar";

function App() {
  return (
    <div
      className="App"
      onClick={() => {
        const video = document.getElementById("intro");
        if (video) {
          video.play();
        }
      }}
    >
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <MovingBar />
        <video id="intro" loop={true} autoPlay={true} playsInline={true}>
          <source src={intro} type="video/mp4" />
        </video>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
