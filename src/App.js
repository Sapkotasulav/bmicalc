import Hello from "./components/Hello";
import "./App.css";
import { useState } from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [BMI, setBMI] = useState("......");
  const [message, setMessage] = useState("");

const reset=()=>{
setBMI(0)
setHeight(0);
setWeight(0);
}

  const calculateBMI = (event) => {
    event.preventDefault();
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height) / 39.37; // Convert inches to meters

    if (!isNaN(weightNum) && !isNaN(heightNum) && heightNum > 0) {
      const bmi = weightNum / (heightNum * heightNum);
      setBMI(bmi.toFixed(2)); // Set BMI to 2 decimal places
      if (bmi > 30) {
        setMessage("You are obese");
      } else if (bmi > 25) {
        setMessage("You are overweight");
      } else if (bmi > 18.5) {
        setMessage("You are normal weight");
      } else {
        setMessage("You are underweight");
      }
    } else {
      setMessage("Please enter valid values");
      setBMI("......");
    }
  };

  return (
    <div className="page">
    <div className="maincontainer">
      <Hello title="BMI Calculator" />
      <form onSubmit={calculateBMI}>
        <div className="innercontainer">
          <div id="weight">
            <h4>Your Weight?</h4>
            <input
              type="text"
              placeholder="Your Weight in KG"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div id="height">
            <h4>Your Height?</h4>
            <input
              type="text"
              placeholder="Your Height in Inches"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          
          <div id="buttons">
            <button type="submit" id="btn1">Calculate</button>
          
            <button id="btn2" onClick={reset}>Reset</button>
          </div> 
          <div className="result">
            <h4>
              Your BMI is: {BMI}
              <p>{message}</p>
            </h4>
          </div>
        </div>
      </form>
    </div>
    <div className="maincontainer"></div>
    </div>
    
  );
}

export default App;
