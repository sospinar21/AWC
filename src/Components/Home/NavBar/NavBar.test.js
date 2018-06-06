import {NavBar,mapDispatchToProps,mapStateToProps } from '../NavBar/NavBar'
import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';

describe('navBar', () => {

  let navBar

  beforeEach(() => {

    const mockProps = {user: {}}
    navBar = shallow(<NavBar {...mockProps}/> )

  })

  it('matches snapshot', () => {
    expect(navBar).toMatchSnapshot();
  })
})