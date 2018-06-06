import {SignUp, mapStateToProps, mapDispatchToProps} from '../signUp/signUp';
import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import * as users from '../../../Helper/Users/Users';

describe('signUp', () => {

  let signUp;
  let mockProps;
  let event;

  beforeEach(() => {

    mockProps = {
      suggestedEvents: [{name: 'party'}],
    };

    signUp = shallow(<SignUp {...mockProps}/>, { disableLifecycleMethods: true });
    users.signUp = jest.fn();
  });

  it('matches snapshot', () => {
    expect(signUp).toMatchSnapshot();
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

      signUp.instance().handleInputChange(event);

      expect(signUp.state().email).toEqual('user@user.com');
    });

    it('sets the state with the new users password', () => {
      
      event = {
        target: {
          name: 'password',
          value: 'hola!'
        },
        preventDefault: () => {}
      };

      signUp.instance().handleInputChange(event);

      expect(signUp.state().password).toEqual('hola!');
    });
  });

  describe('userSignUp', () => {

    it('clears the state', () => {
      
      event = {
        preventDefault: () => {}
      };

      signUp.instance().userSignUp(event);

      expect(signUp.state().password).toEqual('');
      expect(signUp.state().email).toEqual('');
      
    });
  });

  describe('validateEmail', () => {

    it('returns true if the length of email or password is 0', () => {

      signUp.state().email = '';
      signUp.state().password = '';

      expect(signUp.instance().validateEmail()).toEqual(true);
    });
  });

  describe('mapStateToProps', () => {

    let mappedProps

    it('returns an object with the user', () => {

      const mockState = {
        suggestedEvents: [{name: "workshop"}]
      }

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(mockState);
      
    })
  })
});