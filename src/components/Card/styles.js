import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 450px;
  height: 300px;

  background-color: var(--${(props) => props.types});
  border-radius: 12px;
  margin-right: 45px;
  margin-top: 50px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Title = styled.h2`
  display: flex;
  justify-content: flex-start;
  font-size: 2.5rem;
  margin-left: 1rem;
  /* margin-top: 2rem; */
  margin-bottom: 2rem;
  color: #fff;
  font-weight: 700;
`;

export const Cardzinhos = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 55px;
  margin-left: 20px;
  margin-top: 10px;
  width: 80px;
  height: 40px;
  background: var(--${(props) => props.type});
  color: #fff;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
  font-weight: 700;
  border-radius: 20px;
  filter: brightness(0.9);
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
`;
