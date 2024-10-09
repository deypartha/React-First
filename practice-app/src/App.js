import './App.css';
import Decrement from './Components/Decrement';
import Props from './Components/Props';
import PropsClass from './Components/PropsClass';
import SquareClass from './Components/SquareClass';
import StateClass from './Components/StateClass';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React App</h1>
      <Props name="RAM" address="Delhi">
        <p>lorem ipsum is a new seat.</p>
      </Props>
      <Props name="RAMEN" address="Goa">
        <button>Click me</button>
      </Props>
      <Props name="Raj" address="Kolkata">
        <input></input>
      </Props>
      <PropsClass name="Krishna" address="Delhi">
        <p>I am from mahabharata.</p>
      </PropsClass>
      <StateClass></StateClass>
      <Decrement></Decrement>
      <SquareClass></SquareClass>
    </div>
  );
}

export default App;
