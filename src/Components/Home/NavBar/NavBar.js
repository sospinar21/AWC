import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './NavBar.css';

export class NavBar extends Component {
  
  render () {
    console.log(this.props)
    return (
      <div role = 'navigation' className  = 'sideMenu'>
        <section className  ='hidden userInfo'>
          <h2 className Name='useremail' aria-label = 'log in'>{this.props.username}</h2>
        </section>  
        <section className  ='hidden menuSection' role='navigation'>
          <p>Main</p>
          <NavLink to = '/' aria-label = 'Home' className  = 'aMenu'><i className ='material-icons'>home</i>HOME</NavLink>
          <a onClick={() => this.props.makeStudioActive()} aria-label = 'projects' className  = 'aMenu'><i className ='material-icons'>folder_open</i>STUDIOS</a>
          <a onClick={() => this.props.makeEventsActive()} aria-label = 'CRM' className  = 'aMenu'><i className ='material-icons'>portrait</i>EVENTS</a>
          <NavLink to = '/entertainment' aria-label = 'calendar' className  = 'aMenu'><i className ='material-icons'>today</i>VIDEOS</NavLink>
          <a onClick={() => this.props.makeCommunityActive()} aria-label = 'tasks' className  = 'aMenu'><i className ='material-icons'>content_paste</i>POSTS</a>  
        </section>
        <section  role = 'navigation' className  ='hidden menuSection admin'>
          <p>Admin</p>
          <a href = '' aria-label = 'settings' className  = 'aMenu'><i className ='material-icons'>settings</i>SETTINGS</a>
          <a href = '' aria-label = 'Home' className= 'aMenu'></a> 
        </section> 
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return ({
    user: state.user
  });
};

export const mapDispatchToProps = () => ({});

NavBar.propTypes = {
  user: PropTypes.object,
  makeStudioActive: PropTypes.func,
  makeEventsActive: PropTypes.func,
  makeCommunityActive: PropTypes.func
};

export default connect(mapStateToProps)(NavBar);