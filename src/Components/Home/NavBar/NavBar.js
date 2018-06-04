import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './NavBar.css';

export class NavBar extends Component {
  
  render () {
    return (
      <div className='navBar'>
        <div className='logo-box'>
          <h1 className='logo'>AWC</h1>
        </div> 
        <div className='menu'>
          <div className = 'li'>
            <i className='material-icons'>account_circle</i>
            <NavLink to='/signin'>SignUp/ LogIn</NavLink>
          </div>
          <div className = 'li'>
            <i className='material-icons'>group</i>
            <NavLink to='/'>Community</NavLink>
          </div>
          <div className = 'li'>
            <i className='material-icons'>whatshot</i> 
            <NavLink to='/entertainment'>Entertainment</NavLink> 
          </div>
        </div>         
      </div>
    );
  }
}

export const mapStateToProps = {};

export const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);