import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './NavBar.css'

export class NavBar extends Component {
  
  render () {
    return(
      <div className='navBar'>
        <div className='logo'>
        AWC Dance
        </div> 
        <div className='menu'>
          <NavLink to='/community'>Community</NavLink> 
          <NavLink to='/recommendations'>Recommended</NavLink> 
          <NavLink to='/profile'>Profile</NavLink>
        </div>         
      </div>
    )
  }
}

export const mapStateToProps = {}

export const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)