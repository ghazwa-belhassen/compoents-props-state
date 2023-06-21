
import './App.css';

import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'John',};
    };
  };

  changeName = ()=> {
    this.setState({ name: 'Jane' });
  };

  
  render(); {
    return (
      <div className="container">
        <Greeting name={this.state.name} />
        <button onClick={this.changeName}>Change Name</button>
      </div>
    );
  }
  

export default App;
