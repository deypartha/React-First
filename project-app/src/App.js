import logo from './logo.svg';
import './App.css';
import Project from './Component/Project';
import Props from './Component/Props';
function App() {
  return (
    <div className="App">
      {/* <Project></Project> */}
      <Props name="Ajay" address="Delhi"></Props>
    </div>
  );
}

export default App;
