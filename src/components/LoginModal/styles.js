import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: #f9f9f9;
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  input {
    width: 25rem;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.4rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-size: 1.25rem;
  }

  button {
    cursor: pointer;
    background: #21212b;
    width: 25rem;
    height: 4rem;
    border: none;
    border-radius: 0.45rem;
    font-size: 1.5rem;
    color: #f9f9f9;
    font-weight: 700;
    margin-top: 2rem;
    transition: filter 0.6s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
