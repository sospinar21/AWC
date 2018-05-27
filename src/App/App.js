import React, { Component } from 'react';
import './App.css';
import ApiCalls from '../Helper/ApiCalls/ApiCalls';
import { Profile } from '../Components/Profile/Profile/Profile'
import { Suggestions } from '../Components/Profile/Suggestions/Suggestions';
import { NewsFeed } from '../Components/Profile/NewsFeed/NewsFeed';
import { Main } from '../Components/Home/Main/Main'
import { Route } from 'react-router-dom'
import { Stidios } from '../Components/Profile/Studios/Studios'

class App extends Component {
  constructor () {
    super()
  }

 render() {
  let api = new ApiCalls();
   
   return (
     <div className="App">
     <button onClick = {() => api.fetchStudios()}/>
       <Route exact path='/' component={Main} />
       <Route path='/profile' component={Profile} /> 
       <Route path='/suggestions' component={Suggestions} />                   
       <Route path='/newsfeed' component={NewsFeed} />
                 
     </div>
   );
 }
}

export default App;
