import React from "react"
import { useNavigate } from "react-router-dom"
import voiture_1 from "../assets/img/voiture_1.png"
import voiture_2 from "../assets/img/voiture_2.png"
import voiture_3 from "../assets/img/voiture_3.png"

export default function ProductSerp() {
  const navigate = useNavigate()
  return (
    <>
      <div className="container-products-serp">
        <div className="container-header-serp">
          <div className="option">Mieux notés</div>
          <div className="option">Tesla</div>
          <div className="option">Opel</div>
          <div className="option">Dacia</div>
        </div>
        {/* <br/> */}
        <div className="delimitation" />
        {/* <br/> */}
        <div className="card-header">
          3 véhicules sont disponibles
          <br />
          <span className="lieu">à Paris 11ème arrondissement</span>
        </div>
        <div className="card-body">
          <div className="voiture" onClick={() => navigate("/productDesc")}>
            <div className="voiture-text">
              Opel corsa e <br />
              <span className="description">à partir de 45€ / jour</span>
            </div>
            <div className="voiture-img">
              <img width={"200px"} src={voiture_1} alt="" />
            </div>
          </div>
          <div className="voiture" onClick={() => navigate("/productDesc")}>
            <div className="voiture-text">
              Dacia <br />
              <span className="description">à partir de 35€ / jour</span>
            </div>
            <div className="voiture-img">
              <img width={"200px"} src={voiture_2} alt="" />
            </div>
          </div>
          <div className="voiture" onClick={() => navigate("/productDesc")}>
            <div className="voiture-text">
              Smart <br />
              <span className="description">à partir de 30€ / jour</span>
            </div>
            <div className="voiture-img">
              <img width={"200px"} src={voiture_3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
