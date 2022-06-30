import React, { useEffect, useRef, useState } from "react"
export default function ProductPage({ title, lieu }: any) {
  return (
    <>
      <div className="home product">
        <div className="container-header">
          <div className="navbar-btn">
            <span
              className="material-symbols-rounded"
              style={{ fontSize: "30px" }}
            >
              menu
            </span>
            <span
              className="material-symbols-rounded"
              style={{ fontSize: "30px" }}
            >
              account_circle
            </span>
          </div>
          <h1>{`< Modèles disponibles`}</h1>
          <br />
          <p>
            <span
              className="material-symbols-rounded"
              style={{ fontSize: "14px" }}
            >
              calendar_today
            </span>{" "}
            12 juin 12h30 - 16 juin 20h00
            <br />
            <span
              className="material-symbols-rounded"
              style={{ fontSize: "14px" }}
            >
              add_location
            </span>{" "}
            Paris 11ème arrondissement et ses alentours
          </p>
          <br />
          <br />
        </div>
        <div className="container-products"></div>
      </div>
    </>
  )
}
