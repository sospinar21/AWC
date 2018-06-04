import {Login, mapStateToProps, mapDispatchToProps} from '../Login/Login';
import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import {logIn} from '../../../Helper/Users/Users';

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

    login = shallow(<Login {...mockProps}/>, { disableLifecycleMethods: true });

    event = {
      target: {
        email: "user@user.com",
        password: "hola"
      },
      preventDefault: () => {}
    };
  });

  it('matches snapshot', () => {
    expect(login).toMatchSnapshot();
  });


  // describe('userSignIn', () => {

  //   it('sets the state with the new users email and psw', () => {

  //     login.state().email = '';

  //     login.instance().userSignIn(event);

  //     expect(login.state().email).toEqual('a@a.me');
  //   });
  // });

  describe('validateEmail', () => {

    it('returns true if the length of email or password is 0', () => {

      login.state().email = '';
      login.state().password = '';

      expect(login.instance().validateEmail()).toEqual(true);
    });

    it('returns false if the length of email or password is 0', () => {

      login.state().email = 'me@me';
      login.state().password = 'hola';

      expect(login.instance().validateEmail()).toEqual(false);
    });
  });

  // describe('giveAccess', () => {

  //   it('calls giveAccess with the correct params', () => {
  
  //     login.instance().getToken();
  //     login.instance().giveAccess = jest.fn()
  
  //     expect(login.instance().giveAccess).toHaveBeenCalled()
  //   });
  // });
});