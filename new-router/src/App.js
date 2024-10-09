import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import About from './Components/About';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home /></>
    },
    {
      path: "/login",
      element: <><Navbar/><Login /></>
    },
    {
      path: "/about",
      element: <><Navbar/><About /></>
    },
  ])
  return (
    <div className='App'>
      
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
