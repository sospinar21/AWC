import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Entertainment.css';
import Videos from '../Videos/Videos';
import { userSignout } from '../../../Helper/Users/Users';

export class Entertainment extends Component {
  constructor () {
    super();

    this.state = {
      selectedVideo: ''
    };
  }

  render () {

    const singinOut = this.props.user.username ? <div className="txt hiddenBtn" onClick={() => userSignout()}>Log Out</div> : <div className="txt hiddenBtn">Sign Up/SignIn</div>;


    return (
      <div>
        <div className='entertainment'>
          <div className="nav">
            <NavLink to='/' className="logo">
              <div className="logocir">AWC</div>
            </NavLink>
            <div className="buffer"></div>
            <NavLink to='/signin' className="signink">
              <div className="txt">{singinOut}</div>
              <div className="ico">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
              </div>
            </NavLink>
          </div>
            
          <div className='videos'>
            <Videos />
          </div>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return ({
    suggestedEvents: state.suggestedEvents,
    user: state.user    
  });
};

Entertainment.propTypes = {
  suggestedEvents: PropTypes.object,
  user: PropTypes.object
};

export default connect(mapStateToProps)(Entertainment);