import { Events, mapStateToProps, mapDispatchToProps } from '../Events/Events'
import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import  ApiCalls  from '../../../Helper/ApiCalls/ApiCalls';


describe('events', () => {
  let events;
  let mockProps;
  let api = new ApiCalls();

  beforeEach(() => {

    mockProps = {
      suggestedEvents: [{name: 'party'}],
      addEvents: jest.fn()
    }

    api.fetchEvents = jest.fn()
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({data: {}})
    }));
    events = mount(<Events {...mockProps} /> , { disableLifecycleMethods: true })

  })


  it('matches snapshot', () => {
    expect(events).toMatchSnapshot();
  })
})