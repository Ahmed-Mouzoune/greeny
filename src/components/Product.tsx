import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import corsa from "../assets/img/corsa.png"

export default function Product() {
  const navigate = useNavigate()
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="product-container">
      <figure className="image-container">
        <img src={corsa} alt="Voiture" />
        {/* <img src="https://wallpaperaccess.com/full/1354642.jpg" alt="Voiture" /> */}
        <div className="back-button" onClick={() => navigate("/product/1")}>
          <span className="material-symbols-rounded">arrow_back_ios</span>
        </div>
        <div
          onClick={() => setIsFavorite((prev) => !prev)}
          className={isFavorite ? "fav-button active" : "fav-button"}
        >
          <span className="material-symbols-rounded">favorite</span>
        </div>
        <div className="dot-container">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </figure>
      <div className="product-wrapper-desc">
        <div className="product-title">
          <h2>OPEL CORSA-E</h2>
          <div>
            <span className="material-symbols-rounded">star</span>4,6/5
          </div>
        </div>

        <div className="product-description">
          <h2>Description</h2>
          <div className="product-description-wrapper">
            <div className="product-description-content">
              <p>0 - 100 km/h</p>
              <p className="product-green">8,1 sec</p>
            </div>
            <div className="product-description-content">
              <p>Autonomie</p>
              <p className="product-green">550km</p>
            </div>
            <div className="product-description-content">
              <p>Recharge max</p>
              <p className="product-green">100KW</p>
            </div>
          </div>
        </div>

        <div className="product-caracteristique">
          <div className="product-caracteristique-wrapper">
            <p>
              <b>R??cup??ration</b>
            </p>
            <p>Gare Paris 11??me</p>
          </div>
          <div className="product-caracteristique-wrapper">
            <p>
              <b>D??p??t</b>
            </p>
            <p>Parking Gare</p>
          </div>
        </div>

        <div className="product-reservation">
          <div className="product-price">44???/ jour</div>
          <div
            className="product-price product-cta"
            onClick={() => navigate("/confirmation")}
          >
            R??server maintenant
          </div>
        </div>
      </div>
    </div>
  )
}
