import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
import intro from "./assets/video/intro.mp4";
// import MovingBar from "./components/MovingBar";
import DeD from "./components/DeD";

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
      <header></header>
      <section className="App-header">
        {/* <MovingBar /> */}
        <DeD />
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
      </section>
      <footer></footer>
    </div>
  );
}

export default App;
