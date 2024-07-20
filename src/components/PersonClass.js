import React, { Component } from 'react';

class PersonClass extends Component {
  render() {
    const { name, surname, age } = this.props;
    return (
      <div>
        <span>Name: {name}</span>
        <span>Surname: {surname}</span>
        <span>Age: {age}</span>
      </div>
    );
  }
}

export default PersonClass;