import React, { Component } from 'react';
import './App.css';
import ApiCalls from '../Helper/ApiCalls/ApiCalls';
import Main from '../Components/Home/Main/Main';
import { Route, Switch } from 'react-router-dom';
import { Community } from '../Components/Home/Community/Community';
import Entertainment from '../Components/Home/Entertainment/Entertainment'
import { Forms } from '../Components/Home/Forms/Forms';

class App extends Component {

  render () {
    let api = new ApiCalls();
   
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/signin' component={Forms} />
          <Route path='/community' component={Community} />
          <Route path='/entertainment' component={Entertainment} />
        </Switch>                         
      </div>
    );
  }
}

export default App;
