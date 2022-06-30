import React, { useState } from "react"

import Map, { Marker, Popup } from "react-map-gl"
import markerVoiture from "../assets/img/markerVoiture.webp"
import { useNavigate, useParams } from "react-router-dom"
const mapboxgl = require("mapbox-gl")
mapboxgl.accessToken =
  "pk.eyJ1IjoibGVkYXNhNzMyNCIsImEiOiJjbDUwaHNtMm4wNjF2M2RwZG1oNHFwZTJ0In0.ljLu9iA-_khE5I1fhedYfA"

function MapPage() {
  const [title, setTitle] = useState("Où voulez vous louer ?")
  const [lieu, setLieu] = useState("")
  const [lng, setLng] = useState(2.19)
  const [lat, setLat] = useState(48.9)
  const [zoom, setZoom] = useState(9)
  const [showPopup, setShowPopup] = React.useState(false)
  const navigate = useNavigate()
  return (
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
        onClick={() => navigate("/calendar/1")}
        initialViewState={{
          longitude: 2.39,
          latitude: 48.7,
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
        <Marker longitude={2.39} latitude={48.9} anchor="bottom">
          <img src={markerVoiture} width={70} />
        </Marker>
        <Marker longitude={2.39} latitude={48.7} anchor="bottom">
          <img src={markerVoiture} width={70} />
        </Marker>
        <Marker longitude={2.29} latitude={48.6} anchor="bottom">
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
  )
}

export default MapPage
