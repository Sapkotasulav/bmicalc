import Hello from "./components/Hello";
import "./App.css";
function App() {
  return (
    <div className="maincontainer">
      <Hello />
      <form>
        <div className="innercontainer">
          <div id="weight">
            <input type="text" placeholder="Your Weight in KG"></input>
          </div>
          <div id="height">
            <input type="text" placeholder="Your Height in Inches"></input>
          </div>
          <div id="buttons">
            <a href="#" class="button type--B">
              <div class="button__line"></div>
              <div class="button__line"></div>
              <span class="button__text">CALCULATE</span>
              
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
