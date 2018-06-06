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
      selectedLocation: 'Denver',
      user: {username:'Laura'}
    };

    api.getPosts = jest.fn();
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({data: {}})
    }));

    main = shallow(<Main {...mockProps}/>, { disableLifecycleMethods: true });

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

    it('calls fetchlocation', async () => {

      await main.instance().updateState(event);
      main.instance().fetchLocation = jest.fn()

      expect(main.instance().fetchLocation).toHaveBeenCalled()
    });
  });

  describe('addPost', () => {
  
    it('sets the state with the list of posts', () => {
      main.state().posts = []
      const post = {content:'hello'}
      const expected = [{content:'hello'}]

      main.instance().addPost(post);

      expect(main.state().posts).toEqual(expected);
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