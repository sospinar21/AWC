import {Main, mapStateToProps, mapDispatchToProps} from '../Main/Main'
import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import ApiCalls from '../../../Helper/ApiCalls/ApiCalls';

describe('Main', () => {
  let main;
  let mockProps;
  let event;
  const api = new ApiCalls();

  beforeEach(() => {
    mockProps = {
      suggestedEvents: {name: 'workshop'},
      addLocation: jest.fn(),
      addEvents: jest.fn(),
      addStudios: jest.fn(),
      selectedLocation: [],
      user: {username:'Laura'}
    };

    main = shallow(<Main {...mockProps}/>, { disableLifecycleMethods: true });
    main.state().locations = []

    api.getPosts = jest.fn();
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({data: {}})
    }));

    event = {
      target: {
        name: 'email',
        value: 'user@user.com'
      },
      preventDefault: () => {}
    };

  });

  it('matches snapshot', () => {
    let main = shallow(<Main {...mockProps}/>, { disableLifecycleMethods: true });
    expect(main).toMatchSnapshot();
  });

  describe('update state', () => {

    it('sets the state with the selected location', () => {
      
      event = {
        target: {
          name: 'selectedLocation',
          value: 'Denver'
        },
        preventDefault: () => {}
      };

      main.instance().updateState(event);

      expect(main.state().selectedLocation).toEqual('Denver');
    });
  });

  describe('fetchLocation', () => {
  
    it('calls fetchGoogle with the correct params', () => {
      
      const userInput = 'Denver'
      const expected = 'https://api.awc.dance/autocomplete?input=Denver'

      main.instance().fetchLocation(userInput);

      expect(window.fetch).toHaveBeenCalledWith(expected)
    });
  });

  describe('displaySuggestions', () => {

    it('sets the state with the selected location', () => {
      
      const suggestions = ['Denver', 'LA', 'NYC']

      main.instance().displaySuggestions(suggestions );

      expect(main.state().locations).toEqual(suggestions);
    });
  });

  describe('selectedLocation', () => {
  
    it('calls fetchGoogle with the correct params', () => {
      
      main.state().selectedLocation = 'Denver'
      const expected = `https://api.awc.dance/events?city=Denver`

      main.instance().selectedLocation(event);

      expect(window.fetch).toHaveBeenCalledWith(expected)
    });

    it('calls this.props.location with the correct params ', () => {
      
      main.state().selectedLocation = 'Denver'

      main.instance().selectedLocation(event);

      expect(mockProps.addLocation).toHaveBeenCalledWith('Denver')
    });
  });

  describe('makeStudiosActive', () => {

    it('sets the state to studios active = true', () => {

      main.state().studiosActive = false

      main.instance().makeStudioActive();

      expect(main.state().studiosActive).toEqual(true);
      expect(main.state().communityActive).toEqual(false);
      expect(main.state().eventsActive).toEqual(false);
    });
  });

  describe('makeCommunityActive', () => {

    it('sets the state to community active = true', () => {

      main.state().CommunityActive = false

      main.instance().makeCommunityActive();

      expect(main.state().studiosActive).toEqual(false);
      expect(main.state().communityActive).toEqual(true);
      expect(main.state().eventsActive).toEqual(false);
    });
  });

  describe('makeEventsActive', () => {

    it('sets the state to events active = true', () => {

      main.state().eventsActive = false

      main.instance().makeEventsActive();

      expect(main.state().eventsActive).toEqual(true);
      expect(main.state().studiosActive).toEqual(false);
      expect(main.state().communityActive).toEqual(false);
    });
  });
  
  describe('mapStateToProps', () => {

    let mappedProps

    it('returns an object with the user', () => {

      const mockState = {
        user: {username: 'Kai'}
      }

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(mockState);
      
    })
  })

});