import React, { useEffect, useRef, useState } from "react"
import Navbar from "./Navbar"
import Map, { Marker, Popup } from "react-map-gl"
import markerVoiture from "../assets/img/markerVoiture.webp"

const mapboxgl = require("mapbox-gl")
// import mapboxgl from "mapbox-gl"

mapboxgl.accessToken =
  "pk.eyJ1IjoibGVkYXNhNzMyNCIsImEiOiJjbDUwaHNtMm4wNjF2M2RwZG1oNHFwZTJ0In0.ljLu9iA-_khE5I1fhedYfA"
// const geojson = {
//   type: "FeatureCollection",
//   features: [
//     {
//       type: "Feature",
//       geometry: {
//         type: "Point",
//         coordinates: [-77.032, 38.913],
//       },
//       properties: {
//         title: "Mapbox",
//         description: "Washington, D.C.",
//       },
//     },
//     {
//       type: "Feature",
//       geometry: {
//         type: "Point",
//         coordinates: [-122.414, 37.776],
//       },
//       properties: {
//         title: "Mapbox",
//         description: "San Francisco, California",
//       },
//     },
//   ],
// }
export default function HomePage({ title, lieu }: any) {
  const [lng, setLng] = useState(2.19)
  const [lat, setLat] = useState(48.52)
  const [zoom, setZoom] = useState(9)
  const [showPopup, setShowPopup] = React.useState(false)
  return (
    <>
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
    </>
  )
}
