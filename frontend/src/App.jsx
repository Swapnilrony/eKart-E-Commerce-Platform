// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React from 'react'
import { Button } from './components/ui/button'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Verify from './pages/Verify'
import VerifyEmail from "./pages/VerifyEmail"
import Footer from './components/Footer'

const router = createBrowserRouter([
  {
    path:'/',
    element:<><Navbar/><Home/><Footer/></>
  },
  {
    path:'/signup',
    element:<><Signup/></>
  },
   {
    path:'/login',
    element:<><Login/></>
  },
   {
    path:'/Verify',
    element:<><Verify/></>
  },
  {
    path:'/Verify/:token',
    element:<><VerifyEmail/></>
  },
])

const App = () => {
  return (
    <>
      <RouterProvider router = {router}/>
    </>
  )
}

export default App