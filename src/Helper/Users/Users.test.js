import Users from '../Users/Users'
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

describe('app', () => {

  it('matches snapshot', () => {
    let app = shallow(<Users />, { disableLifecycleMethods: true })
    expect(app).toMatchSnapshot();
  })
})