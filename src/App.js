import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: 'Monster01'
        },
        {
          name: 'Dracula',
          id: 'Monster02',
        },
        {
          name: 'Zombie',
          id: 'Monster03'
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map(monster => <h1> { monster.name }</h1>)
        }
      </div>
    )
  }
}

export default App;
