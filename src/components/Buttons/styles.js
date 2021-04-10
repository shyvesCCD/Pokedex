import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #21212b;
  width: 250px;
  height: 50px;
  border: none;
  border-radius: 10px;
  margin-bottom: 2rem;
  margin-top: 2rem;
  cursor: pointer;
  transition: filter 0.2s;
  font-weight: 700;

  &:hover {
    filter: brightness(0.9);
  }

  color: #f9f9f9;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
