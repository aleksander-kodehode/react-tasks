import styled from "styled-components";

export const ContextButton = styled.button`
  color: white;
  background: ${(props) => (props.decrease ? "red" : "green")};
  font-size: 20px;
  margin: 10px;
  padding: 5px 20px;
  border-radius: 3px;
  border: none;
  transition: filter 0.3s ease-in-out;
  &:hover,
  :active {
    filter: brightness(90%) contrast(120%);
  }
`;
