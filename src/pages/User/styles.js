import styled from "styled-components";

export const Introducion = styled.p`
  display: flex;
  justify-content: center;
  color: #fff;
  margin-top: 2rem;
  font-size: 1.5rem;
`;

export const Button = styled.button`
  display: flex;

  align-items: center;
  justify-content: center;

  background: #21212b;
  border: none;
  border-radius: 0.35rem;
  transition: filter 0.2s;
  width: 20.5rem;
  height: 4rem;

  color: #b8b8d0;
  font-weight: 700;
  font-size: 1.1rem;

  margin-left: 3rem;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }

  margin-top: 1.5rem;
`;
