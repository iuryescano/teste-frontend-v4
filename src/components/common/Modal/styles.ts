import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: opacity 0.3s ease;
  overflow-y: auto;
`;

export const Content = styled.div`
  background: ${(props) => props.theme["gray-900"]};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px; /* Diminuído de 500px para 400px */
  max-height: 70%; /* Limita a altura do modal */
  width: 100%;
  box-shadow: 0 2px 10px rgba(49, 19, 19, 0.1);
  position: relative;
  overflow-y: auto; /* Adiciona barra de rolagem para o conteúdo */
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: ${(props) => props.theme["red-500"]};
`;