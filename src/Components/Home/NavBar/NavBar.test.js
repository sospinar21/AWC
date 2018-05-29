import {NavBar,mapDispatchToProps,mapStateToProps } from '../NavBar/NavBar'
import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';

describe('navBar', () => {

  let navBar

  beforeEach(() => {

    navBar = mount(<NavBar /> , { disableLifecycleMethods: true })

  })

  it('matches snapshot', () => {
    expect(navBar).toMatchSnapshot();
  })
})