import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Container } from "./styles";

interface EquipmentPosition {
  id: string;
  name: string;
  lat: number;
  lon: number;
}

interface MapProps {
  equipmentPositions: EquipmentPosition[];
}

export function Map({ equipmentPositions }: MapProps) {
  return (
    <Container>
      <MapContainer center={[-19.172475, -46.080028]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {equipmentPositions.map((equipment) => (
          <Marker key={equipment.id} position={[equipment.lat, equipment.lon]}>
            <Popup>
              <strong>{equipment.name}</strong>
              <br />
              Latitude: {equipment.lat}
              <br />
              Longitude: {equipment.lon}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Container>
  );
}