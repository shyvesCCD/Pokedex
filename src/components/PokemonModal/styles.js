import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: #fff;
  }

  img {
    width: 16.5rem;
    height: 15.375rem;
  }

  h4 {
    color: #fff;
  }

  button {
    margin-top: 1rem;
    background-color: #181820;
    border: none;
    cursor: pointer;
  }
`;

export const Cardzinhos = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 3.438rem;
  margin-left: 1.25rem;
  margin-top: 0.625rem;
  width: 5rem;
  height: 2.5rem;
  background: var(--${(props) => props.type});
  color: #fff;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  margin-bottom: 0.625rem;
  font-weight: 700;
  border-radius: 1.25rem;
`;

export const ContainerCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;
