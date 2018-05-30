import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Login.css';
import { signUp, 
  logIn, 
  updateUserInfo, 
  confirmRegistration, 
  changePassword,
  forgotPassword,
  userSignout,
  rememberDevice
 } from '../../../Helper/Users/Users'
  import { NavBar } from '../NavBar/NavBar'

export class Login extends Component {

  componentDidMount() {
  }
  
  userSignUp = (e) => {
    e.preventDefault()
    signUp()
  }

  userSignIn = (e) => {
    e.preventDefault()
    logIn()
  }
  
  render () {
    return (
      <div className='si-su'>
      <NavBar />
        <div className='website'/> 
        <div className='forms'>
          <div className='signup-box'>
            <h1>AWC Dance </h1>
            <button>Log in with Facebook </button>
            <button>Log in with Google </button>              
            <form className='form' autoComplete='on'>
              <input 
                autoComplete='on'
                placeholder='Email'
                className='email'/>
              <input
                autoComplete='on'
                type='password' 
                placeholder='Password'
                className='password'/>
              <input 
                autoComplete='on'
                placeholder='City'
                className='city' />
              <button 
                onClick={(e) => this.userSignUp(e)}
                className='signup'>Sign Up </button>
            </form>

            <div className='policy'> 
              <h3>By signing up, you agree to our Terms, Data Policy and Cookies Policy.</h3>
            </div>
          </div>
          <div className='signin'>
            <h3>Have an Account ?</h3>
            <form autoComplete='on'>
              <input 
                autoComplete='on'
                placeholder='Email'              
                className='email-si'/>
              <input 
                autoComplete='on'
                type='password'
                placeholder='Password'
                className='password-si'/>
              <button 
                onClick={(e) => this.userSignIn(e)}              
                className='login'>Log In</button>              
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

Login.propTypes = {
  suggestedEvents: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);