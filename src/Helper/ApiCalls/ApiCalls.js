import { eventsApiKey, yelpKey } from '../../apikey';
import DataCleaner from '../DataCleaner/DataCleaner'
import React, {Component} from 'react';

class ApiCalls extends Component {
  constructor(){
    super()
  }

  fetchEvents = async () => {
    const dataCleaner = new DataCleaner()
    const url = `https://www.eventbriteapi.com/v3/events/search/?q=dance&location.address=denver&token=${eventsApiKey}`;
    const response = await fetch(url)
    const data= await response.json();
    const events = await dataCleaner.cleanEventsData(data.events) 
    return events
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
}

export default ApiCalls;