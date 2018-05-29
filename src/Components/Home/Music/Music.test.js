import Music from '../Music/Music'
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

describe('app', () => {

  it('matches snapshot', () => {
    let app = shallow(<Music />, { disableLifecycleMethods: true })
    expect(app).toMatchSnapshot();
  })
})