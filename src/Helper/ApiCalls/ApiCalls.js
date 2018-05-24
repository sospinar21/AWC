import { eventsApiKey, yelpKey } from '../../apikey';
import React, {Component} from 'react';
const yelp = require('yelp-fusion')

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
    const client = yelp.client(yelpKey);
    
    const searchRequest = {
      term:'dance studios',
      location: 'denver'
    }; 
    
    const response = await client.search(searchRequest);
    const first = response.jsonBody.businesses[0];
    const data = JSON.stringify(first, null, 4)
    console.log(data)
    // const data = await response.json();
  }


}

export default ApiCalls;