import React from 'react';
import styled, { keyframes } from 'styled-components';
import Header from './components/Header';
import Home from './components/Home';
import Person from './components/Person';
import PersonClass from './components/PersonClass';
const pulseAnimation = keyframes`
  0% {
    text-shadow: 0 0 5px rgba(255, 0, 0, 0.5);
  }
  50% {
    text-shadow: 0 0 20px rgba(255, 0, 0, 1);
  }
  100% {
    text-shadow: 0 0 5px rgba(255, 0, 0, 0.5);
  }
`;

// h1
const StyledSectionHeading = styled.h2`
  font-size: 3rem;
  color: #ff1493; // Яркий цвет
  text-align: center;
  margin: 20px 0;
  font-family: 'Arial', sans-serif;
  font-weight: bold;
  background: linear-gradient(45deg, #ff1493, #ff6347); // Градиентный фон
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 10px rgba(255, 20, 147, 0.7);
  animation: ${pulseAnimation} 2s infinite;
`;

function App() {
  return (
    <div>
      <Header />
      <Home />
      <section>
        <StyledSectionHeading>Person</StyledSectionHeading>
        <Person name="John" surname="Doe" age={30} />
        <Person name="Jane" surname="Smith" age={25} />
        <Person name="Alice" surname="Johnson" age={28} />
      </section>
      <section>
        <StyledSectionHeading>PersonClass</StyledSectionHeading>
        <PersonClass name="Michael" surname="Brown" age={35} />
        <PersonClass name="Emily" surname="Davis" age={32} />
        <PersonClass name="David" surname="Wilson" age={29} />
      </section>
    </div>
  );
}

export default App;