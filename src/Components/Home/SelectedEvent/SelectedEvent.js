import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SelectedEvent.css';
import PropTypes from 'prop-types';

export class SelectedEvent extends Component {

  backgroundImage = () => {
    if (this.props.selectedEvent.logo){
      const selected = this.props.selectedEvent.logo.url;
      const selectedEvent = document.querySelector('.selected-event')
      selectedEvent.style.backgroundImage = `url(${selected})`
    }
  }

render () {
    const selected = this.props.selectedEvent
    if (selected) {
      return (
        <div className='flex'>
          {this.backgroundImage()}
          <div className='event-desc'>
            <h1> {selected.name}</h1>
            <div className='event-description'>
              {/* <h2>{selected.date.local}</h2> */}
              <p>{selected.description}</p>
            </div>
          </div>
        </div>
      ); 
    } else {
      return (
        <div className='loading'>
         Loading...
        </div>
      );
    }
  }
}

export const mapStateToProps = (state) => {
  return ({
    selectedEvent: state.selectedEvent
  });
};

export default connect(mapStateToProps)(SelectedEvent);