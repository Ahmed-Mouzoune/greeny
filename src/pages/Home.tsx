import React, { useState } from "react"
import IntroHome from "../components/IntroHome"

import Map, { Marker, Popup } from "react-map-gl"
import markerVoiture from "../assets/img/markerVoiture.webp"
const mapboxgl = require("mapbox-gl")
mapboxgl.accessToken =
  "pk.eyJ1IjoibGVkYXNhNzMyNCIsImEiOiJjbDUwaHNtMm4wNjF2M2RwZG1oNHFwZTJ0In0.ljLu9iA-_khE5I1fhedYfA"

export default function Home() {
  const [step, setStep] = useState(0);
  const [title, setTitle] = useState("Où voulez vous louer ?");
  const [lieu, setLieu] = useState("");
  const [lng, setLng] = useState(2.19)
  const [lat, setLat] = useState(48.52)
  const [zoom, setZoom] = useState(9)
  const [showPopup, setShowPopup] = React.useState(false)
  return (
    <>
      {step < 4 && <IntroHome step={step} setStep={setStep} />}
      {step >= 4 && 
        <div className="home">
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
            <h1>{title}</h1>
            <br />
            {lieu && `> à ${lieu}`}
          </div>
          <Map
            onClick={() => setShowPopup(true)}
            initialViewState={{
              longitude: lng,
              latitude: lat,
              zoom: zoom,
            }}
            style={{
              width: "100%",
              height: "75%",
              borderTopLeftRadius: "44px",
              borderTopRightRadius: "44px",
              backgroundColor: "$LIGHT",
            }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >
            <Marker longitude={lng} latitude={lat} anchor="bottom">
              <img src={markerVoiture} width={70} />
            </Marker>
            {showPopup && (
              <Popup
                longitude={lng}
                latitude={lat}
                anchor="bottom"
                onClose={() => setShowPopup(false)}
              >
                You are here
              </Popup>
            )}
          </Map>
        </div>
      }
    </>
  )
}
