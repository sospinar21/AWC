import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SelectedEvent.css';
import PropTypes from 'prop-types';

export class SelectedEvent extends Component {

render () {
  console.log(this.props.selectedEvent)
    const selected = this.props.selectedEvent
    if (selected) {
      return (
        <div className='selected-event'>
          <h1> {selected.name}</h1>
          {/* <h2>{selected.date.local}</h2> */}
          <p>{selected.description}</p>
        </div>
      ); 
    } else {
      return (
        <div className='loading'>
         
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