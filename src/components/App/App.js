import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
      newCreature: {
        name: '',
        origin: '',
      },
  };

  componentDidMount = () => {
    console.log('this is where the first GET request gets fired off');
    // GET request goes here
  }

  handleChangeFor = ( event, propertyName) => {
    this.setState({
      newCreature: {
        ...this.state.newCreature,
        [propertyName]: event.target.value,
      }
    });
  }

  handleSubmit = (event) => {
    // perform POST and GET request
    this.setState({
      newCreature: {
        name: '',
        origin: '',
      },
    });
  }

  render() {
    return (
      <div>
        <p>
          The {this.state.newCreature.name} originated in {this.state.newCreature.origin}.
        </p>
        
        <div>
          <input value={this.state.newCreature.name} onChange={(event) => this.handleChangeFor(event, 'name')} />
          <input value={this.state.newCreature.origin} onChange={(event) => this.handleChangeFor(event, 'origin')} />
          <input type="submit" value="Add Creature" />
        </div>

        <ul>
          <li>Here is where we will list out our mythical creatures</li>
        </ul>
      </div>
    );
  }
}

export default App;
