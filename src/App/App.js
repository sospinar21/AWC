import React, { Component } from 'react';
import './App.css';
import ApiCalls from '../Helper/ApiCalls/ApiCalls';
import { Profile } from '../Components/Profile/Profile/Profile';
import { Main } from '../Components/Home/Main/Main';
import { Route } from 'react-router-dom';
import Login from '../Components/Home/Login/Login';
import { Community } from '../Components/Home/Community/Community';
import Studios from '../Components/Home/Studios/Studios';
import Events from '../Components/Home/Events/Events';

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
        <Route path='/signin' component={Login} />
        <Route path='/community' component={Community} />
        <Route path='/studios' component={Studios} />                         
        <Route path='/events' component={Events} />                                                               
      </div>
    );
  }
}

export default App;
