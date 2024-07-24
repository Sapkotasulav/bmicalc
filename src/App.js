import Hello from "./components/Hello";
import World from "./components/World";
import Input from "./components/Input";
function App() {
  return (
    <div className='maincontainer'>
      
     
      <form>
        <div className='innercontainer'>
          <div id='weight'><Hello /></div>
          <div id='height'> <World /></div>
          <div id='buttons'>
            
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
