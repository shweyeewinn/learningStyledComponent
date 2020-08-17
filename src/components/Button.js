import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  padding: 1rem 1.5rem;
  font-size: 1rem;
  /* color: ${({ primary }) => (primary ? 'red' : '#fff')}; */
  color: #fff;
  outline: none;
  border: none;
  background-color: #000;
  margin-bottom: 1rem;
  /* nested interpolation with css */
  ${({ primary }) =>
    primary &&
    css`
      color: blue;
      background-color: ${({ bgColor }) => bgColor};
    `}
`;

const StyledButton2 = styled.button`
  background-color: white;
  color: palevioletred;
  font-size: 1.2rem;
  margin: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid palevioletred;
  border-radius: 3px;
  ${({ primary }) =>
    primary &&
    css`
      background-color: palevioletred;
      color: white;
      box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
    `}
`;

//To inherit the styles from StyledButton2
const SuperButton = styled(StyledButton2)`
  font-size: 2.5rem;
`;
const Button = ({ children, bgColor, primary }) => {
  return (
    <>
      <StyledButton2 primary={primary} bgColor={bgColor}>
        {children}
      </StyledButton2>
      <SuperButton>SuperButton</SuperButton>
    </>
  );
};

export default Button;
