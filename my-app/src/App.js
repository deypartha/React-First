import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Body from './Component/Body';
import Footer from './Component/Footer';
import About from './Component/About';
import Login from './Component/Login'
import Navbar from './Component/Navbar';
// import {createBrowserRouter, routerProvider} from 'react-router-dom'
function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <><Header /><Header /></>
  //   },
  //   {
  //     path: "/about",
  //     element: <><Header /><About /></>
  //   },
  //   {
  //     path: "/login",
  //     element: <><Header /><Login /></>
  //   }
  // ])
  return (
    <div className="App">
      <Navbar></Navbar>
       <Header></Header>
      {/* <routerProvider router = {router}></routerProvider> */}
     
      <Body></Body>
      <Footer></Footer>
      <About></About>
    </div>
  );
}

export default App;
