import './App.css';
import Count from './Components/Count';
import CounterFunc from './Components/CounterFunc';
import Decrement from './Components/Decrement';
import NewCounter from './Components/NewCounter';
import NumberDemo from './Components/NumberDemo';
import Props from './Components/Props';
import PropsClass from './Components/PropsClass';
import SquareClass from './Components/SquareClass';
import StateClass from './Components/StateClass';
import UseState from './Components/UseState';
import UseState2 from './Components/UseState2';
import Image from './Components/Image';
function App() {
  return (
    <div className="App">
      <h1>Welcome to React App</h1>
      <Props name="RAM" address="Delhi">
        <p>lorem ipsum is a new seat.</p>
      </Props>
      {/* <Props name="RAMEN" address="Goa">
        <button>Click me</button>
      </Props> */}
      {/* <Props name="Raj" address="Kolkata">
        <input></input>
      </Props> */}
      {/* <PropsClass name="Krishna" address="Delhi">
        <p>I am from mahabharata.</p>
      </PropsClass> */}
      {/* // <StateClass></StateClass> */}
      {/* // <Decrement></Decrement> */}
      {/* // <SquareClass></SquareClass> */}
      {/* <Count></Count> */}
      {/* <NewCounter></NewCounter> */}
      {/* <UseState></UseState>
      <CounterFunc></CounterFunc>
      <UseState2></UseState2>
      <NumberDemo></NumberDemo> */}
      <Image></Image>
    </div>
  );
}

export default App;
