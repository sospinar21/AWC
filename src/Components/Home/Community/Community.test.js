import {Community} from '../Community/Community'
import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';

describe('community', () => {
  let community;

  beforeEach(() => {

    community = mount(<Community /> , { disableLifecycleMethods: true })

  })

  it('matches snapshot', () => {
    let community = shallow(<Community />, { disableLifecycleMethods: true })
    expect(community).toMatchSnapshot();
  })
})