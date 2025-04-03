import styled from "styled-components";

export const ButtonContainer = styled.button`
  background: ${(props) => props.theme["green-700"]};
  color: ${(props) => props.theme.white};
  border: none;
  border-radius: 6px;
  padding: 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: ${(props) => props.theme["green-500"]};
  }
  &:disabled {
    background: ${(props) => props.theme["gray-500"]};
    cursor: not-allowed;
  }
`;