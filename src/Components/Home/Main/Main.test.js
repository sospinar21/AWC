import {Main, mapStateToProps, mapDispatchToProps} from '../Main/Main'
import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';

describe('main', () => {

  let main

  beforeEach(() => {

    main = mount(<Main /> , { disableLifecycleMethods: true })

  })

  it('matches snapshot', () => {
    expect(main).toMatchSnapshot();
  })
})