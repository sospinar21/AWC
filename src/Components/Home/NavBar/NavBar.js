import React, { Component } from 'react'
import NavLink from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class NavBar extends Component {
  



  render () {
    return(
      <div className='navBar'>
        <div className='logo'/>
        <NavLink to='/community'></NavLink> 
        <NavLink to='/recommendations'></NavLink> 
        <NavLink to='/profile'></NavLink>         
      </div>
    )
  }
}

export const mapStateToProps = {}

export const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)