
import {
  RouterProvider,
  createBrowserRouter,
  // Navigate,
  // Route,
} from "react-router-dom";

import './App.css'
import DashboardLayout from './Layouts/DashboardLayout';
import QuoteDetails from "./components/QuoteDetails";


const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        index: true, 
        element: <QuoteDetails/>
      }
      
    ]

  }
])

function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
