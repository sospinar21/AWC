import React, { Component } from 'react';
import './App.css';
import ApiCalls from '../Helper/ApiCalls/ApiCalls';
import { Profile } from '../Components/Profile/Profile/Profile'
import { Main } from '../Components/Home/Main/Main'
import { Route } from 'react-router-dom'
import Login from '../Components/Home/Login/Login'

class App extends Component {
  constructor () {
    super()
  }

 render() {
  let api = new ApiCalls();
   
   return (
     <div className="App">
       <Route exact path='/' component={Main} />
       <Route path='/profile' component={Profile} /> 
       <Route path='/signin' component={Login} />                         
     </div>
   );
 }
}

export default App;
