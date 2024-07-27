import Hello from "./components/Hello";
import "./App.css";
import { useState } from "react";
function App() {
  const [weight, setweight] = useState();
  const [height, setheight] = useState();
  const [BMI, setBMI] = useState("......");
  const [message, setmessage] = useState("");
  

  return (
    <div className="maincontainer"> /* main form */ 
      <Hello />
      <form>
        <div className="innercontainer">
          <div id="weight">
            {" "}
            <h4>Your Weight ?</h4>
            <input
              type="text"
              placeholder="Your Weight in KG"
              value={weight}
              onChange={(e) => setweight(e.target.value)}
            ></input>
          </div>
          <div id="height">
            <h4>Your Height ?</h4>
            <input
              type="text"
              placeholder="Your Height in Inches"
              value={height}
              onChange={(e) => setheight(e.target.value)}
            ></input>
          </div>
          <div id="buttons">
            <button type="submit" id="buttonp">Calculate</button>
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
