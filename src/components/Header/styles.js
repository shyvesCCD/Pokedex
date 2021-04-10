import styled from "styled-components";

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  color: #f9f9f9;
  margin-top: 2rem;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #21212b;
  border: none;
  border-radius: 0.35rem;
  transition: filter 0.2s;
  width: 7.5rem;
  height: 2.5rem;

  color: #f9f9f9;
  font-weight: 700;

  margin-left: 3rem;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;
