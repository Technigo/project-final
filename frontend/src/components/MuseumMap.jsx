import { Link } from "react-router-dom"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"

export const MuseumMap = ({ museums, showLink, center }) => {
  const customIcon = new L.Icon({
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    shadowSize: [41, 41],
  })

  return (
    <MapContainer
      center={center}
      zoom={12}
      style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {museums.map((museum) => (
        <Marker
          key={museum.id}
          position={[museum.lat, museum.lon]}
          icon={customIcon}>
          <Popup>
            <div>
              <h3>{museum.name}</h3>
              <p>{museum.location}</p>
              {showLink && (
                <p>
                  Discover{" "}
                  <Link to={`/${museum.id}`} key={museum.id}>
                    here
                  </Link>
                </p>
              )}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
