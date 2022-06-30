import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./scss/main.scss"
import Product from "./pages/Product"
import Home from "./pages/Home"
import CalendarLayout from "./components/CalendarLayout"
import ProductSerp from "./components/ProductSerp"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}> 
        </Route>
        <Route path="calendar" element={<Product />}> 
          <Route path=":idCalendar" element={<CalendarLayout />} /> 
        </Route> 
        <Route path="product" element={<Product />}>
          <Route path=":idProduit" element={<ProductSerp />} /> 
        </Route> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
