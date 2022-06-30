import React, { useState } from "react"
import "react-date-range/dist/styles.css" // main style file
import "react-date-range/dist/theme/default.css" // theme css file
import { DateRange } from "react-date-range"
import { useNavigate } from "react-router-dom"

export default function CalendarLayout() {
  const navigate = useNavigate()
  const [startValue, setStartValue] = useState(new Date())
  const [endValue, setEndValue] = useState(new Date())
  const selectionRange = {
    startDate: startValue,
    endDate: endValue,
    key: "selection",
  }
  return (
    <>
      <div className="container-products">
        <div className="space-calendar"></div>
        <DateRange
          ranges={[selectionRange]}
          onChange={(e) => navigate("/product/1")}
        />
      </div>
    </>
  )
}
