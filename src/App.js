import logo from './logo.svg';
import './App.css';
import BasicInfo from './basicinfo'
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          name: "Brynn Moore",
          number: "7047984410",
          dateOfBirth: "07/08/2000"
        },
        {
          name: "Hassan Niang",
          number: "1234567890",
          dateOfBirth: "10/10/2000"
        },
        {
          name: "Chastity Matthews",
          number: "2222222222",
          dateOfBirth: "05/10/1998"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.people.map((person, index) => (
          <BasicInfo key={index} person={person} />
        ))}
      </div>
    );
  }
}


export default App;
