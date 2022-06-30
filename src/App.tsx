import React from "react"
import { Routes, Route, Link, Outlet } from "react-router-dom"
import Home from "./pages/Home"
import Product from "./pages/Product"

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  )
}

export default App
