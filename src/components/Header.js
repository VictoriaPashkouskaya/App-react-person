import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
const starAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;


const AnimatedText = styled.h1`
  display: inline-block;
  font-size: calc(40px);
  color: white;
  margin: 0;
  text-transform: uppercase;
  
  // Анимация каждой буквы
  span {
    display: inline-block;
    animation: ${starAnimation} 1s ease-in-out infinite;
    opacity: 0;
  }
  
  span:nth-child(1) { animation-delay: 0s; }
  span:nth-child(2) { animation-delay: 0.1s; }
  span:nth-child(3) { animation-delay: 0.2s; }
  span:nth-child(4) { animation-delay: 0.3s; }
  span:nth-child(5) { animation-delay: 0.4s; }
  // И так далее для всех букв
`;

const HeaderWrapper = styled.header`
  background-color: #282c34;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(40px);
  color: white;

  @media (max-width: 768px) {
    min-height: 15vh;
    font-size: calc(30px);
  }

  @media (max-width: 480px) {
    min-height: 10vh;
    font-size: calc(20px);
  }
`;

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <AnimatedText>
          {Array.from('Hola   Mundo!').map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </AnimatedText>
      </HeaderWrapper>
    );
  }
}

export default Header;