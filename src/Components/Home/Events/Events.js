import React, { Component } from 'react';
import  ApiCalls  from '../../../Helper/ApiCalls/ApiCalls';
import { connect } from 'react-redux';
import { addEvents } from '../../../Actions/actions';
import PropTypes from 'prop-types';
import './Events.css';

export class Events extends Component {
  constructor () {
    super();
    
  }

  componentDidMount() {
    const city = this.props.selectedLocation;
    const selectedLocation = city.length ? city : 'usa'
    this.fetchEvents(selectedLocation);
  }
  
  fetchEvents = async (city) => {
    let api = new ApiCalls();
    const suggestedEvents = await api.fetchEvents(city);
    await this.props.addEvents(suggestedEvents);
  }

  displayEvents = () => {
    const events = this.props.suggestedEvents.map(suggEvent => {
      if (suggEvent.logo){
        var img = suggEvent.logo.url;
      } else {
        var img = 'https://www.kent.edu/sites/default/files/styles/teaser_image/public/page/B0B_4055crop.JPG?itok=4ie7uvK-';
      }
      return (
        <div key={suggEvent.id} className='suggEvent-cards'>
          <img src={img} />
          <div className='text-container'>
            <h4>{suggEvent.name}</h4>
            <b>{suggEvent.date.utc}</b>
            <div className='description'>
              <p>{suggEvent.description}</p>
            </div>
          </div>   
        </div>
      );
    });
    return events;
  }

  eventsInMain = () => {
    const events = this.props.suggestedEvents.map(suggEvent => {
      if (suggEvent.logo){
        var img = suggEvent.logo.url;
      } else {
        var img = 'https://www.kent.edu/sites/default/files/styles/teaser_image/public/page/B0B_4055crop.JPG?itok=4ie7uvK-';
      } 
      return (
        <div key={suggEvent.id} className='events-small-box'>
          <img src={img} />
          <h4>{suggEvent.name}</h4>
        </div>
      );
    });
    return events;
  }

  render () {
    if (this.props.suggestedEvents.length) {
      return (
        <div> 
          <div className='cards-container-small'>
            {this.eventsInMain()}
          </div>
        </div>
      );
    } else {
      return (
        <h1>Loading </h1>
      );
    }
  }
}

export const mapStateToProps = (state) => {
  return ({
    suggestedEvents: state.suggestedEvents,
    selectedLocation: state.location
  });
};

export const mapDispatchToProps = dispatch => ({
  addEvents: (eventsData) => dispatch(addEvents(eventsData)) 
  
});

Events.propTypes = {
  suggestedEvents: PropTypes.array,
  addEvents: PropTypes.func,
  selectedLocation: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);