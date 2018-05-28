import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Login.css';

export class Login extends Component {
  
  
  render () {
    return (
      <div className='si-su'>
        <div className='website'/> 
        <div className='forms'>
          <div className='signup-box'>
            <h1>AWC Dance </h1>
            <button>Log in with Facebook </button>
            <button>Log in with Google </button>              
            <form className='form'>
              <input 
                placeholder='Email'
                className='email'/>
              <input 
                placeholder='Password'
                className='password'/>
              <input 
                placeholder='City'
                className='city' />
              <button className='signup'>Sign Up </button>
            </form>

            <div className='policy'> 
              <h3>By signing up, you agree to our Terms, Data Policy and Cookies Policy.</h3>
            </div>
          </div>
          <div className='signin'>
            <h3>Have an Account ?</h3>
            <form>
              <input 
                placeholder='Email'              
                className='email-si'/>
              <input 
                placeholder='Email'
                className='password-si'/>
              <button className='login'>Log In</button>              
            </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);