import React, { Component } from 'react';
import './App.css';
import ApiCalls from '../Helper/ApiCalls/ApiCalls';
import { Profile } from '../Components/Profile/Profile/Profile';
import Main from '../Components/Home/Main/Main';
import { Route } from 'react-router-dom';
import { Community } from '../Components/Home/Community/Community';
import Entertainment from '../Components/Home/Entertainment/Entertainment'
import { Forms } from '../Components/Home/Forms/Forms';

class App extends Component {
  constructor () {
    super();
  }

  render() {
    let api = new ApiCalls();
   
    return (
      <div className="App">
        <Route exact path='/' component={Main} />
        <Route path='/profile' component={Profile} /> 
        <Route path='/signin' component={Forms} />
        <Route path='/community' component={Community} />
        <Route path='/entertainment' component={Entertainment} />                         
      </div>
    );
  }
}

export default App;
