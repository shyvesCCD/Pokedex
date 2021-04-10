import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: #21212b;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 400px;
    padding: 0 1.5rem;
    height: 4rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-size: 1rem;
  }

  button {
    background: #33cc95;
    width: 400px;
    height: 4rem;
    border: none;
    border-radius: 0.45rem;
    font-size: 1.5rem;
    color: #f9f9f9;
    font-weight: 700;
    margin-top: 2rem;
  }
`;
