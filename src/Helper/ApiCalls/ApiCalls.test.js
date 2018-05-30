import ApiCalls from '../ApiCalls/ApiCalls'
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';


describe('app', () => {

  it('matches snapshot', () => {
    let apiCalls = shallow(<ApiCalls />, { disableLifecycleMethods: true })
    expect(apiCalls).toMatchSnapshot();
  })

  describe('fetchEvents', () => {

    it('', () => {

    })
  })

  describe('fetchStudios', () => {

    it('', () => {
      
    })
  })

  describe('fetchVideos', () => {

    it('', () => {
      
    })
  })
})