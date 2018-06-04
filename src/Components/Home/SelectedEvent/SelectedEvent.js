import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SelectedEvent.css';
import PropTypes from 'prop-types';

export class SelectedEvent extends Component {


  render () {
    const selected = this.props.selectedEvent;
    if (selected) {
      const name = selected.name ? selected.name : 'Select an Event'
      return (
        <div className='flex'>
          <div className='event-desc'>
            <h1> {name}</h1>
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

SelectedEvent.propTypes = {
  selectedEvent: PropTypes.obj
};

export default connect(mapStateToProps)(SelectedEvent);