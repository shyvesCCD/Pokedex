import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #21212b;
  width: 15.625rem;
  height: 3.125rem;
  border: none;
  border-radius: 0.625rem;
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
