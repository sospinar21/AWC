import { Events, mapStateToProps, mapDispatchToProps } from '../Events/Events';
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
      addEvents: jest.fn(),
      selectedEvent: {name:'workshop'},
      addSelectedEvent: jest.fn(),
      selectedLocation: 'Denver'
    };

    api.fetchEvents = jest.fn();
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({data: {name: 'workshop'}})
    }));
    events = shallow(<Events {...mockProps} /> );

  });


  it('matches snapshot', () => {
    expect(events).toMatchSnapshot();
  });

  describe('fetchEvents', () => {

    it('calls window.fetch', async () => {

      await events.instance().fetchEvents(mockProps.selectedLocation);
      expect(window.fetch).toHaveBeenCalled();
    });

    it('calls props.addEvents', () => {

      events.instance().fetchEvents();
      expect(mockProps.addEvents).toHaveBeenCalledWith({data: {name: 'workshop'}});
    });
    
  });

  describe('storeSelected', () => {

    it('calls props.addSelectedEvent', async () => {

      const suggested = {name: 'workshop'}
      await events.instance().storeSelected(suggested);
      expect(mockProps.addSelectedEvent).toHaveBeenCalledWith(suggested);
    });    
  });

  describe('eventsInMain', () => {

    it('shows a default image if the event doesnt have one', () => {

      events.instance().eventsInMain();

      expect(events.find('img').prop('src')).toEqual('https://www.kent.edu/sites/default/files/styles/teaser_image/public/page/B0B_4055crop.JPG?itok=4ie7uvK-');

    });
    
  });

  describe('mapStateToProps', () => {
    
    let mockDispatch;
    let suggestedEvents;
    let mappedProps;

    it('returns an object with the suggestedEvents', () => {

      const mockState = {
        suggestedEvents: {name: 'Workshop'}
      };

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(mockState);
      
    });
  })

  describe('mapDispatchToProps', () => {

    it('should call dispatch with the correct params', () => {
    
      let mockDispatch = jest.fn();
      let mappedProps = mapDispatchToProps(mockDispatch);
      
      const eventsData = {id: 1, title:'workshop'};      
      const mockAction = {
        type: 'ADD_EVENTS',
        eventsData
      };
  
      mappedProps.addEvents(eventsData);
      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

  });
  
});
