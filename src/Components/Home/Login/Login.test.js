import {Login, mapStateToProps, mapDispatchToProps} from '../Login/Login';
import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import * as users from '../../../Helper/Users/Users';

describe('login', () => {

  let login;
  let mockProps;
  let event;

  beforeEach(() => {

    mockProps = {
      suggestedEvents: [{name: 'party'}],
      user: {namename:'Steph'},
      addUser: jest.fn()
    };

    login = mount(<Login {...mockProps}/>, { disableLifecycleMethods: true });
    users.logIn = jest.fn();

  });

  it('matches snapshot', () => {
    expect(login).toMatchSnapshot();
  });


  describe('handleInputChange', () => {

    it('sets the state with the new users email', () => {
      
      event = {
        target: {
          name: 'email',
          value: 'user@user.com'
        },
        preventDefault: () => {}
      };

      login.instance().handleInputChange(event);

      expect(login.state().email).toEqual('user@user.com');
    });

    it('sets the state with the new users password', () => {
      
      event = {
        target: {
          name: 'password',
          value: 'hola!'
        },
        preventDefault: () => {}
      };

      login.instance().handleInputChange(event);

      expect(login.state().password).toEqual('hola!');
    });
  });

  describe('userSignIn', () => {

    it('clears the state', () => {
      
      event = {
        preventDefault: () => {}
      };

      login.instance().userSignIn(event);

      expect(login.state().password).toEqual('');
      expect(login.state().email).toEqual('');
      
    });
  });

  describe('validateEmail', () => {

    it('returns true if the length of email or password is 0', () => {

      login.state().email = '';
      login.state().password = '';

      expect(login.instance().validateEmail()).toEqual(true);
    });

    it('returns false if the length of email or password is not 0', () => {

      login.state().email = 'me@me';
      login.state().password = 'hola';

      expect(login.instance().validateEmail()).toEqual(false);
    });
  });

  describe('giveAccess', () => {

    it('calls addUser with the correct params', () => {
  
      login.instance().giveAccess();
  
      expect(mockProps.addUser).toHaveBeenCalled()
    });

    it('sets the state to login = true', () => {
  
      login.instance().giveAccess();
  
      expect(login.state().login).toEqual(true);
    });
  });

  describe('mapStateToProps', () => {

    let mappedProps

    it('returns an object with the user', () => {

      const mockState = {
        user: {username: 'Kai'}
      }

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(mockState);
      
    })
  })

  describe('mapDispatchToProps', () => {

    it('should call dispatch with the correct params', () => {
    
      let mockDispatch = jest.fn();
      let mappedProps = mapDispatchToProps(mockDispatch);
      
      const user = {name:'Steph'};      
      const mockAction = {
        type: 'ADD_USER',
        user
      };
  
      mappedProps.addUser(user);
      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });
  })
});