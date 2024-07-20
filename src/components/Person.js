import React from 'react';

const Person = ({ name, surname, age }) => {
    return (
      <div>
        <span>Name: {name}</span>
        <span>Surname: {surname}</span>
        <span>Age: {age}</span>
      </div>
    );
  };

  
  export default Person;