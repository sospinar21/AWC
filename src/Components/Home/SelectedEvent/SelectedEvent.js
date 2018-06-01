import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SelectedEvent.css';
import PropTypes from 'prop-types';

export class SelectedEvent extends Component {



render () {

    if (this.props.selectedEvent) {
      return (
        <div className='videos-main'>
          
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