import {Login, mapStateToProps, mapDispatchToProps} from '../Login/Login'
import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';

describe('login', () => {

  let login
  let mockProps;

  beforeEach(() => {

    mockProps = {
      suggestedEvents: [{name: 'party'}],
      user: {namename:'Steph'},
      addUser: jest.fn(),
    }

    login = shallow(<Login {...mockProps}/> , { disableLifecycleMethods: true })

  })

  it('matches snapshot', () => {
    expect(login).toMatchSnapshot();
  })

  // describe('handleInputChange', () => {

  //   it('updates state when input changes', () => {

  //     let input = login.find('.email-si');

  //     input.simulate('change', { target: { value: 'a@a.me' } });

  //     expect(login.state().email).toEqual('a@a.me');
  //   })
    
  // })

  // describe('userSignIn', () => {

  //   it('sets the state with the new users email and psw', () => {

  //     login.state().email = ''

  //     login.instance().userSignIn()

  //     expect(login.state().email).toEqual('a@a.me');
  //   })
    
  // })
})