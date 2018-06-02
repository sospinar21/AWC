import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Forms.css';
import { NavBar } from '../NavBar/NavBar'
import  Login  from '../Login/Login';
import { SignUp } from '../SignUp/SignUp';

export class Forms extends Component {
  constructor() {
    super()
    this.state = {
      logIn: false,
      signUp: true
    }
  }

  showLogIn = () => {
    this.setState({ logIn: true, signUp: false})
  }

  showSignUp = () => {
    this.setState({ logIn: false, signUp: true})
  }

  displaySelected = () => {
    return this.state.logIn === true ? <Login /> : <SignUp />
  }

  render () { 
    const selected = this.state.logIn === true ? 'selected' : 'no-selected'
    const selected2 = this.state.signUp === true ? 'selected' : 'no-selected'

    return (
      <div className='si-su'>
        <NavBar />
        <div className='website'/> 
        <div className='forms'>
          <div className='forms-menu'> 
            <button className= {selected} onClick={this.showLogIn}>Log In </button>
            <button className={selected2} onClick={this.showSignUp}>Sign Up </button>
          </div>
          {this.displaySelected()}
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

Forms.propTypes = {
  suggestedEvents: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(Forms);