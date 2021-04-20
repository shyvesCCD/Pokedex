import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 28.125rem;
  height: 18.75rem;
  cursor: pointer;
  border: none;

  background-color: var(--${(props) => props.types});
  border-radius: 0.75rem;
  margin-right: 2.813rem;
  margin-top: 3.125rem;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Title = styled.h2`
  display: flex;
  justify-content: flex-start;
  font-size: 2rem;
  margin-left: 1rem;
  margin-bottom: 2rem;
  color: #fff;
  font-weight: 700;
`;

export const Cardzinhos = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  filter: brightness(0.9);
`;

export const Image = styled.img`
  width: 12.5rem;
  height: 15.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2.5rem;
`;

export const ContainerImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
