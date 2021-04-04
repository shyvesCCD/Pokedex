import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 300px;
  border: 1px solid #48d0b0;
  background-color: #48d0b0;
  border-radius: 12px;
  margin-right: 45px;
  margin-top: 50px;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: flex-start;
  font-size: 2.5rem;
  margin-left: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: #fff;
  font-weight: 700;
`;

export const Cardzinhos = styled.p`
  width: 55px;
  margin-left: 20px;
  margin-top: 10px;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  background: #61e1c9;
  color: #fff;
  margin-bottom: 10px;
  font-weight: 700;
  border-radius: 20px;
`;
