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
    events = mount(<Events {...mockProps} /> )

  })


  it('matches snapshot', () => {
    expect(events).toMatchSnapshot();
  })

  describe('componentDidMount', () => {
    it('calls fetchEvents', () => {

      events.instance().componentDidMount()
      events.instance().fetchEvents = jest.fn()
      expect(events.instance().fetchEvents).toHaveBeenCalled()
    })
  })

  describe('fetchEvents', () => {

    it('calls window.fetch with the correct params', () => {
      events.instance().fetchEvents()
      expect(window.fetch).toHaveBeenCalledWith('https://api.awc.dance/events?city=denver')
    })

    it('calls props.addEvents', () => {

      events.instance().fetchEvents()
      expect(mockProps.addEvents).toHaveBeenCalledWith({"data": {}})
    })
    
  })

  describe('displayEvents', () => {

    it('shows a default image if the event doesnt have one', () => {

      const mockProps2 = {
        suggestedEvents: [{date:{utc:'today'}}],
        addEvents: jest.fn()
      }

      events = mount(<Events {...mockProps2} /> )

      events.instance().displayEvents()
      
      const logo = events.find('img')

      expect(logo.props('src').value).toEqual(undefined)
    })
    
  })

  describe('eventsinMain', () => {
    
  })

  describe('mapStateToProps', () => {
    
    let mockDispatch;
    let suggestedEvents;
    let mappedProps

    it('returns an object with the suggestedEvents', () => {

      const mockState = {
        suggestedEvents: {name: 'Workshop'}
      }

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(mockState);
      
    })
  })

  describe('mapDispatchToProps', () => {

    it('should call dispatch with the correct params', () => {
    
      let mockDispatch = jest.fn();
      let mappedProps = mapDispatchToProps(mockDispatch);
      
      const eventsData = {id: 1, title:'workshop'}      
      const mockAction = {
        type: 'ADD_EVENTS',
        eventsData
      };
  
      mappedProps.addEvents(eventsData);
      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    })

  })
  
})
