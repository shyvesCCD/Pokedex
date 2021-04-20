import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  color: #fff;
  margin-top: 2rem;
  font-size: 3.5rem;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #21212b;
  border: none;
  border-radius: 0.35rem;
  transition: filter 0.2s;
  width: 8.5rem;
  height: 3rem;

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

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 4px solid #21212b;
  height: 2.075rem;
  padding: 0.5rem 0 0.5rem 0;
  border-radius: 12px;
  margin-left: 4rem;
  margin-top: 1.5rem;

  img {
    color: #b8b8d0;
    margin-left: 0.8rem;
  }
`;

export const Input = styled.input`
  color: #b8b8d0;
  border: none;
  background-color: #181820;
  outline: none;
  width: 100%;
  padding: 0 0 0 0.5rem;
  margin-left: 0.25rem;
  font-size: 1.1rem;
`;

export const ButtonSearch = styled.button`
  border: none;
  background-color: #21212b;
  border-radius: 2rem;
  height: 2.2rem;
  width: 9rem;
  margin-right: 0.5rem;
  font-size: 1.05rem;
  font-weight: 700;
  outline: none;
  color: #b8b8d0;
  transition: filter 0.2s;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Introducion = styled.p`
  display: flex;
  justify-content: center;
  color: #fff;
  margin-top: 2rem;
  font-size: 1.5rem;
  margin-left: 2rem;
`;

export const Button2 = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #21212b;
  border: none;
  border-radius: 0.35rem;
  transition: filter 0.2s;
  width: 7.5rem;
  height: 3rem;

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
