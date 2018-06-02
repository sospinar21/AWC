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
  cogToken,
  rememberDevice,
 } from '../../../Helper/Users/Users'
  import { NavBar } from '../NavBar/NavBar'

export class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
    }
  }

  handleInputChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  userSignIn = (e) => {
    e.preventDefault()
    logIn()
  }

  validateEmail = () => {
    const {email, password} = this.state
    return(
      email.length === 0,
      password.length === 0
    )
  }

  getToken = () => {
    cogToken()
  }

  render () {
    return (
      <div className='si-su'>
        <div className='signin'>
          <h3>Have an Account ?</h3>
          <h1>AWC </h1>
          <button>Log in with Facebook </button>
          <button onClick={() => this.getToken()}>Log in with Google </button>
          <form autoComplete='on'>
            <input 
              name='email'
              type='email'
              onChange={this.handleInputChange}
              value={this.state.email} 
              autoComplete='on'
              placeholder='Email'             
              className='email-si'/>
            <input 
              name='password'
              onChange={this.handleInputChange}
              value={this.state.password} 
              autoComplete='on'
              type='password' 
              placeholder='Password'
              className='password-si'/>
            <button
              disabled={this.validateEmail()}  
              onClick={(e) => this.userSignIn(e)}              
              className='login'>Log In</button>              
          </form>
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