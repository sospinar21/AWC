import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NavBar } from '../../Home/NavBar/NavBar';
import './Entertainment.css';
import Videos from '../Videos/Videos';
import ApiCalls from '../../../Helper/ApiCalls/ApiCalls';

export class Main extends Component {
  constructor() {
    super();

    this.state = {
      selectedVideo: ''
    };
  }

  render () {

    return (
      <div>
        <div className='entertainment'>
          <div className='navBar-entert'>
            <NavBar />
            <div className='videos'>
              <Videos />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return ({
    suggestedEvents: state.suggestedEvents
  });
};

export const mapDispatchToProps = dispatch => ({
  
});

Main.propTypes = {
  suggestedEvents: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);