import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [curTime, setCurTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTime = new Date().toLocaleTimeString();
      setCurTime(newTime);
    }, 1000);

    return () => {
      clearInterval(intervalId); // Clean up the interval on component unmount
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="App">
      <div className="row">
        <div
          className="col-md-6 d-flex justify-content-center flex-column p-5 gap-3"
          style={{ height: "100vh" }}
        >
          <h1>
            Hello, Everyone! <br /> Let's build the Clock app in React-App
          </h1>
          <p>
            Experience simplicity with ReactClock, a React.js-based clock app.
            It offers a clean interface displaying accurate real-time,
            12/24-hour format, and smooth animations. enhancing visual appeal.
            Built with responsiveness in mind, ReactClock assures seamless usage
            across devices. Stay tuned for upcoming alarm functionality, further
            elevating your time management.
          </p>
          <div>
            <button className="btn btn-danger">Youtube</button>
            <button className="btn btn-outline-success ms-3">
              Source Code
            </button>
          </div>
        </div>
        <div
          className="col-md-6 d-flex justify-content-center flex-column p-5 gap-3"
          style={{ height: "100vh",alignItems:'center' }}
        >
          <div className="clock">
            <h1>{curTime}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
