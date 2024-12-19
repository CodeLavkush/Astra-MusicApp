import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/home/home.jsx"
import Bhojpuri from "./components/bhojpuri/bhojpuri.jsx"
import English from "./components/english/English.jsx"
import Love from "./components/love/love.jsx"



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/bhojpuri",
      element: <Bhojpuri />,
    },
    {
      path: "/Love",
      element: <Love />
    },
    {
      path: "/english",
      element: <English />
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
