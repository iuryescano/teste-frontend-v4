import React from "react";
import {
  EquipmentContainer,
  EquipmentTitle,
  EquipmentModel,
  EarningsTitle,
  EarningsList,
  EarningsItem,
  StateColor,
  LastState,
  LastPosition,
} from "./styles";

interface EquipmentProps {
  equipment: {
    id: string;
    name: string;
    modelName: string;
    hourlyEarnings: {
      equipmentStateId: string;
      value: number;
      stateName: string;
      stateColor: string;
    }[];
    lastState: {
      stateName: string;
      stateColor: string;
      date: string | null;
    };
    lastPosition: {
      lat: number;
      lon: number;
      date: string | null;
    } | null;
  };
}

export function Equipment({ equipment }: EquipmentProps) {
  return (
    <EquipmentContainer>
      <EquipmentTitle>Equipamento: {equipment.name}</EquipmentTitle>
      <EquipmentModel>
        <strong>Modelo:</strong> {equipment.modelName}
      </EquipmentModel>

      {/* Último estado */}
      {equipment.lastState && (
        <LastState>
          <strong>Último Estado:</strong>{" "}
          <span style={{ color: equipment.lastState.stateColor }}>
            {equipment.lastState.stateName}
          </span>{" "}
          {equipment.lastState.date && (
            <em>({new Date(equipment.lastState.date).toLocaleString()})</em>
          )}
        </LastState>
      )}

      {/* Última posição */}
      {equipment.lastPosition && (
        <LastPosition>
          <strong>Última Posição:</strong>{" "}
          <span>
            Latitude: {equipment.lastPosition.lat}, Longitude:{" "}
            {equipment.lastPosition.lon}
          </span>{" "}
          {equipment.lastPosition.date && (
            <em>({new Date(equipment.lastPosition.date).toLocaleString()})</em>
          )}
        </LastPosition>
      )}

      <EarningsTitle>Ganhos por Hora:</EarningsTitle>
      <EarningsList>
        {equipment.hourlyEarnings.map((earning) => (
          <EarningsItem key={earning.equipmentStateId}>
            <StateColor style={{ backgroundColor: earning.stateColor }} />
            <strong>{earning.stateName}:</strong>{" "}
            {earning.value >= 0
              ? `R$ ${earning.value}`
              : `Perda de R$ ${Math.abs(earning.value)}`}
          </EarningsItem>
        ))}
      </EarningsList>
    </EquipmentContainer>
  );
}