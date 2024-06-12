import { useState } from 'react'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './router/home';


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
  
    // ReviewPage
  ]);

  return (
    <>
  <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
