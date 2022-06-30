import React from "react"
import { useNavigate } from "react-router-dom"

function ConfirmationReservation() {
  const navigate = useNavigate()
  return (
    <div className="confirmation">
      <span
        onClick={() => navigate("/")}
        className="material-symbols-rounded close-btn"
      >
        close
      </span>

      <div className="confirmation-message">
        <span className="material-symbols-rounded yes">done</span>
        <h1>Votre réservation à bien été confirmée. </h1>
      </div>

      <div className="reservation">Voir mes réservations</div>
    </div>
  )
}

export default ConfirmationReservation
