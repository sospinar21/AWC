import {Login, mapStateToProps, mapDispatchToProps} from '../Login/Login'
import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';

describe('login', () => {

  let login

  beforeEach(() => {

    login = mount(<Login /> , { disableLifecycleMethods: true })

  })

  it('matches snapshot', () => {
    expect(login).toMatchSnapshot();
  })
})