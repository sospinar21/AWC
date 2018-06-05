import React, { Component } from 'react';
import  ApiCalls  from '../../../Helper/ApiCalls/ApiCalls';
import { connect } from 'react-redux';
import { addEvents, addSelectedEvent } from '../../../Actions/actions';
import PropTypes from 'prop-types';
import './Events.css';

export class Events extends Component {


  componentDidMount() {
    const city = this.props.selectedLocation;
    const selectedLocation = city.length ? city : 'usa';
    this.fetchEvents(selectedLocation);
  }
  
  fetchEvents = async (city) => {
    let api = new ApiCalls();
    const suggestedEvents = await api.fetchEvents(city);
    await this.props.addEvents(suggestedEvents);
  }

  storeSelected = (suggEvent) => {
    this.props.addSelectedEvent(suggEvent);
  }

  eventsInMain = () => {
    const events = this.props.suggestedEvents.map((suggEvent, index) => {
      if (suggEvent.logo){
        var img = suggEvent.logo.url;
      } else {
        var img = 'https://www.kent.edu/sites/default/files/styles/teaser_image/public/page/B0B_4055crop.JPG?itok=4ie7uvK-';
      } 
      return (
        <div className="post" key={suggEvent + index} onClick={() => this.storeSelected(suggEvent)}>
          <div className="poster">
            <b className='event-b'>{suggEvent.name}</b>
            <br/>
          </div>
          <div className="content content-e">
            <img src={img} />
          </div>
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
        <div className='loading'>
          <h1 >Loading...</h1>
        </div>
      );
    }
  }
}

export const mapStateToProps = (state) => {
  return ({
    suggestedEvents: state.suggestedEvents,
    selectedLocation: state.location,
    selectedEvent: state.selectedEvent
  });
};

export const mapDispatchToProps = dispatch => ({
  addEvents: (eventsData) => dispatch(addEvents(eventsData)), 
  addSelectedEvent: (selected) => dispatch(addSelectedEvent(selected))
});

Events.propTypes = {
  suggestedEvents: PropTypes.array,
  selectedEvent: PropTypes.object,
  addSelectedEvent: PropTypes.func,
  addEvents: PropTypes.func,
  selectedLocation: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);