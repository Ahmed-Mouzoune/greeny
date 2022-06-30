import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./scss/main.scss"
import ProductLayout from "./pages/ProductLayout"
import Home from "./pages/Home"
import CalendarLayout from "./components/CalendarLayout"
import ProductSerp from "./components/ProductSerp"
import Product from "./components/Product"
import ConfirmationReservation from "./components/ConfirmationReservation"
import MapPage from "./pages/Map"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="calendar" element={<ProductLayout />}>
          <Route path=":idCalendar" element={<CalendarLayout />} />
        </Route>
        <Route path="/map" element={<MapPage />} />
        <Route path="product" element={<ProductLayout />}>
          <Route path=":idProduit" element={<ProductSerp />} />
        </Route>
        <Route path="productDesc" element={<Product />} />
        <Route path="confirmation" element={<ConfirmationReservation />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
