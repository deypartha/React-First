// import logo from './logo.svg';
// import './App.css';
// // import Navbar from './Components/Navbar';
// // import Home from './Components/Home';
// // import Login from './Components/Login';
// // import About from './Components/About';
// // import {createBrowserRouter,RouterProvider} from 'react-router-dom'
// function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <><Navbar/><Home /></>
//     },
//     {
//       path: "/login",
//       element: <><Navbar/><Login /></>
//     },
//     {
//       path: "/about",
//       element: <><Navbar/><About /></>
//     },
//   ])
//   return (
//     <div className='App'>
      
//       <RouterProvider router={router} />
//     </div>
//   );
// }


// export default App;






import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomeToday from './Components/HomeToday'
import AboutToday from './Components/AboutToday'
import NavbarToday from './Components/NavbarToday'
import OrderProduct from './Components/OrderProduct'
function App() {
  return (
    <div className='App'>
      <NavbarToday />
      <Routes>
        <Route path='/' element={<HomeToday />} />
        <Route path='/AboutToday' element={<AboutToday />} />
        <Route path = '/order' element={<OrderProduct></OrderProduct>} ></Route>
      </Routes>
    </div>
  )
}

export default App
