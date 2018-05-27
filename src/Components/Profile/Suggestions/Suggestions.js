import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Events from '../Events/Events';
import { NavBar } from '../../Home/NavBar/NavBar';
import Studios from '../Studios/Studios';
import './Suggestions.css';
import Videos from '../Videos/Videos';

export class Suggestions extends Component {
  



  render () {
    return (
      <div>
        <NavBar />
        <h1>Our Community</h1>
        <div className='suggestions-menu'>
          <NavLink to='suggestions/studios' className='studio-small-box box'>
            <div className='studio-btn'/>
            <h3>Studios</h3>
          </NavLink>
          <NavLink to='suggestions/events' className='event-small-box box'>
            <div className='events-btn'/>
            <h3>Events</h3>            
          </NavLink>
        </div>
        <Events />
        <Studios />
        <Videos />
      </div>
    )
  }
}

export const mapStateToProps = () => {}

export const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Suggestions)