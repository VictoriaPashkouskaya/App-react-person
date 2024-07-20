import React from 'react';
import styled, { keyframes } from 'styled-components';

//animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PersonWrapper = styled.div`
  background-color: #FF1493;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  text-align: center;
  color: white;
  animation: ${fadeIn} 1s ease-out;
`;

const Info = styled.span`
  display: block;
  margin: 5px;
  font-size: calc(1rem + 0.5vw);
`;

const Person = ({ name, surname, age }) => {
  return (
    <PersonWrapper>
      <Info>Name: {name}</Info>
      <Info>Surname: {surname}</Info>
      <Info>Age: {age}</Info>
    </PersonWrapper>
  );
};

export default Person;