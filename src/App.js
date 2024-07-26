import Hello from "./components/Hello";
import "./App.css";
import { useState } from "react";
function App() {
  const [weight, setweight] = useState();
  const [height, setheight] = useState();
  const [BMI, setBMI] = useState("......");
  const [message, setmessage] = useState("");
  

  return (
    <div className="maincontainer">
      <Hello />
      <form>
        <div className="innercontainer">
          <div id="weight">
            {" "}
            <h4>Weight:</h4>
            <input
              type="text"
              placeholder="Your Weight in KG"
              value={weight}
              onChange={(e) => setweight(e.target.value)}
            ></input>
          </div>
          <div id="height">
            <h4>Height:</h4>
            <input
              type="text"
              placeholder="Your Height in Inches"
              value={height}
              onChange={(e) => setheight(e.target.value)}
            ></input>
          </div>
          <div id="buttons">
            <a href="#" class="button type--B">
              <div class="button__line"></div>
              <div class="button__line"></div>
              <span class="button__text">CALCULATE</span>
            </a>
          </div>
          <div className="result">
            <h4>
              Your BMI is: {BMI}
              <p>{message} </p>
            </h4>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
