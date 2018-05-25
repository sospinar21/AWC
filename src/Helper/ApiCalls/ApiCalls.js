import { eventsApiKey, yelpKey } from '../../apikey';
import React, {Component} from 'react';

class ApiCalls extends Component {
  constructor(){
    super()
  }

  fetchEvents = async () => {
    const url = `https://www.eventbriteapi.com/v3/events/search/?q=dance&location.address=denver&token=${eventsApiKey}`;
    const response = await fetch(url)
    const data= await response.json();
    console.log(data)
  } 

  fetchStudios = async () => {
    const url = `https://api.yelp.com/v3/businesses/search?location=80202&categories=dancestudio`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + yelpKey
      },
    })
    const data = await response.json();
    console.log(data)
  } 

//   fetchStudios = () => {
//   console.log(yelpKey);
//   //const url = `https://api.yelp.com/v3/businesses/search?location=80202&categories=dancestudio`;
//   const url = `https://api.qbott.io/repo`;
//   var xhttp= new XMLHttpRequest;
  
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4) {
//      console.log(this.responseText);
//     }
//   };
//   xhttp.open("GET", url, true);
//   console.log(yelpKey);
//   //xhttp.setRequestHeader('Authorization', 'Bearer ' + yelpKey);
//   xhttp.send();
//   }
}

export default ApiCalls;