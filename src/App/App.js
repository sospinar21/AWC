import React, { Component } from 'react';
import './App.css';
import ApiCalls from '../Helper/ApiCalls/ApiCalls';

class App extends Component {
  render() {
    let api = new ApiCalls()
    return (
      <div className="App">
        <button onClick={() => api.fetchStudios()} /> 
      </div>
    );
  }
}

export default App;
