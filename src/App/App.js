import React, { Component } from 'react';
import './App.css';
import ApiCalls from '../Helper/ApiCalls/ApiCalls';
import axios from 'axios';
import Vue from 'vue'
import VueAxios from 'vue-axios'
import { Suggestions } from '../Components/Profile/Suggestions/Suggestions';
import { NewsFeed } from '../Components/Profile/NewsFeed/NewsFeed';
import { Main } from '../Components/Home/Main/Main'
import { Route } from 'react-router-dom'

Vue.use(VueAxios, axios)

class App extends Component {
  constructor () {
    super()
  }
  
  
//   componentDidMount() {
//   let api = new ApiCalls();
//   api.fetchStudios()
//  }

 render() {
  let api = new ApiCalls();
   
   return (
     <div className="App">
     <button onClick = {() => api.fetchStudios()}/>
       <Route exact path='/' component={Main} />
       {/* <Route path='/profile' component={Profile} />  */}
       <Route path='/suggestions' component={Suggestions} />
       <Route path='/newsfeed' component={NewsFeed} />
                 
     </div>
   );
 }
}

export default App;
