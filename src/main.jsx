import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Interests from './pages/Interests.jsx'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/Home",
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: "/About",
    element: <About />,
    errorElement: <Error /> 
  },
  {
    path: "/Contact",
    element: <Contact />,
    errorElement: <Error /> 
  },
  {
    path: "/Interests",
    element: <Interests />,
    errorElement: <Error />
  } 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
