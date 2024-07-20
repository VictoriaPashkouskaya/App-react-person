import React from 'react';
import styled from 'styled-components';
const HomeWrapper = styled.header`
background-color: #987c35;
min-height: 20vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(20px);
color: white;
`;

const Home = () => {
  return (
   <HomeWrapper> <main>
      <h2>Welcome to the Home Page</h2>
      <p>This is the home page content.</p>
    </main></HomeWrapper>
  );
};

export default Home;