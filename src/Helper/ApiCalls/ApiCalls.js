import React, {Component} from 'react';

class ApiCalls extends Component {
  constructor(){
    super()
  }

  fetchEvents = async () => {
    const url = `https://api.awc.dance/events?city=vermont`;
    const response = await fetch(url)
    const data= await response.json();
    return data;
  } 

  fetchStudios = () => {
    const url = `https://api.awc.dance/?city=80202`;
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      }
    }).then( response => response.json() )
      .then( data => console.log(data) )   
  }

  fetchStudios= () => {
      var url = 'https://api.awc.dance/youtubevideos'
      fetch(url).then(response => response.json())
      .then(data => {console.log(data)})
  }
}

export default ApiCalls;