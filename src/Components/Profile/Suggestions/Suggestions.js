import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Events from '../Events/Events';
import { NavBar } from '../../Home/NavBar/NavBar';
import {Studios} from '../Studios/Studios';
import './Suggestions.css';

export class Suggestions extends Component {
  



  render () {
    return (
      <div>
        <NavBar />
        <h1>Our Community</h1>
        <div className='suggestions-menu'>
          <div className='studio-small-box box'>
            <div className='studio-btn'/>
            <h3>Studios</h3>
          </div>
          <div className='event-small-box box'>
            <div className='events-btn'/>
            <h3>Events</h3>            
          </div>
        </div>
        <Events />
        <Studios />
      </div>
    )
  }
}

export const mapStateToProps = () => {}

export const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Suggestions)