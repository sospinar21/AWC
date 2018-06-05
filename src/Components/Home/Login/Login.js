import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Login.css';
import {  logIn } from '../../../Helper/Users/Users';
import { NavBar } from '../NavBar/NavBar';
import { addUser } from '../../../Actions/actions';
import {CognitoUserPool} from 'amazon-cognito-identity-js';
import { Redirect } from 'react-router';
import ApiCalls from '../../../Helper/ApiCalls/ApiCalls';



export class Login extends Component {
  constructor() {
    super();
    this.state = {
      login: false,
      email: '',
      password: ''
    };
  }

  handleInputChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  userSignIn = (e) => {
    e.preventDefault();
    logIn(this.state);
    this.getToken();
    this.setState({email:'', password:''});
  }

  validateEmail = () => {
    const {email, password} = this.state;
    return (
      email.length === 0,
      password.length === 0
    );
  }

  getToken = () => {
    var poolData = { UserPoolId : 'us-west-2_t4LvOKjcE',
      ClientId: '47bsfajnf2rmvpt02q8qjvm29u'
    };

    var userPool = new CognitoUserPool(poolData);
    var cognitoUser = userPool.getCurrentUser();

    if (cognitoUser != null) {
      cognitoUser.getSession((err, session) =>  {
        if (err) {
          alert(err);
          return;
        }
        var token = session.getIdToken().getJwtToken();
        this.giveAccess(cognitoUser);
      });
    }
  }

  giveAccess = async (user) => {
    this.props.addUser(user);
    this.setState({login:true});
  }

  render () {

    this.state.login === true && <Redirect to='/profile' />;
    
    return (
      <div className='si-su'>
        <div className='signin'>
          <h3>LOGIN</h3>
          <div className="logo">
            <div className="logocir">AWC</div>
          </div>
          <h4 className='success'></h4>
          <h4 className='incorrect'></h4>
          <form className='login-form' autoComplete='on'>
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
    suggestedEvents: state.suggestedEvents,
    user: state.user
  });
};

export const mapDispatchToProps = dispatch => ({
  addUser: (user) => dispatch(addUser(user))
});

Login.propTypes = {
  suggestedEvents: PropTypes.array,
  addUser: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);