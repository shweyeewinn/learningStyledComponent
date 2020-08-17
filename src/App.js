import React from 'react';
import styled from 'styled-components';
import Button from './components/Button';

const MainWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  color: red;
  font-size: 2rem;
`;

// const Section = styled.section`
//   padding: 2rem;
//   margin: 2rem;
// `;

const App = () => {
  return (
    <MainWrapper>
      <Title>Styled Component</Title>
      <Button primary bgColor="violet">
        Primary Button
      </Button>
      <Button>Normal Button</Button>
    </MainWrapper>
  );
};

export default App;
