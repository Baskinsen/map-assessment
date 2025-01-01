
import {
  RouterProvider,
  createBrowserRouter,
  // Navigate,
  // Route,
} from "react-router-dom";

import './App.css'
import DashboardLayout from './Layouts/DashboardLayout';
import QuoteDetails from "./components/QuoteDetails";
import Respond from "./components/Respond";


const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        index: true, 
        element: <QuoteDetails/>
      },
      {
        path: 'respond',
        element: <Respond/>
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
