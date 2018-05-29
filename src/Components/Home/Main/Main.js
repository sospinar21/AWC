import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Events from '../Events/Events';
import { NavBar } from '../../Home/NavBar/NavBar';
import Studios from '../Studios/Studios';
import './Main.css';
import Videos from '../Videos/Videos';
import Music from '../Music/Music';
import { Community } from '../Community/Community';

export class Main extends Component {
  
  
  render () {
    console.log(this.props);
    return (
      <div>
        <div className='news-feed'>
          <div className='navBar-forum'>
            <NavBar />
            <div className='forum'>
              <div className='location'>
                <input
                  placeholder='city'
                  className='city=input'
                />
                <a>Studios</a> 
                <a>Events</a> 
                <a></a> 
              </div>  
              <Community />
            </div>
          </div>
          <div className='side-container'>
            <div className='events-small'>
              <h3> Events </h3>
              <br/>
              <Events />
            </div>
            <div className='studios-small'>
              <h3> Studios </h3>
              <Studios />
            </div>
          </div> 
        </div>
        <div className='videos-small'>
          <Videos />
        </div>
        {/* <Music /> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);