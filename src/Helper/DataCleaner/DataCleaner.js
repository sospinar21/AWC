
import React, {Component} from 'react';

class ApiCalls extends Component {
  constructor(){
    super()
  }

  cleanEventsData = (data) => {
    console.log('cleannerrrr',data)
    const events = data.map(event => {
      return {
        id: event.id,
        date: event.start,
        status: event.status,
        logo: event.logo,
        name: event.name.text,
        description: event.description.text,
        capacity: event.capacity
      }
    })
    return events;
  }
}

export default ApiCalls;