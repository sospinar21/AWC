import React, { Component } from 'react';
import './App.css';
import '../Components/Home/Login/Login.css';
import '../Components/Home/Events/Events.css';
import '../Components/Home/SignUp/SignUp.css';
import '../Components/Home/Videos/Videos.css';
import '../Components/Home/Forms/Forms.css';
import '../Components/Home/SelectedEvent/SelectedEvent.css'
import '../Components/Home/Entertainment/Entertainment.css';
import Main from '../Components/Home/Main/Main';
import { Route, Switch } from 'react-router-dom';
import { Community } from '../Components/Home/Community/Community';
import Entertainment from '../Components/Home/Entertainment/Entertainment';
import { Forms } from '../Components/Home/Forms/Forms';

class App extends Component {

  render () {
   
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
