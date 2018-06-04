import {Community, mapStateToProps} from '../Community/Community';
import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import ApiCalls from '../../../Helper/ApiCalls/ApiCalls';

describe('community', () => {
  let community;
  let mockProps;
  const api = new ApiCalls();

  beforeEach(() => {
    mockProps = {
      user: {username: 'Steph'},
    };

    api.getPosts = jest.fn();
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({data: {}})
    }));

    community = shallow(<Community {...mockProps}/>, { disableLifecycleMethods: true });

  });

  it('matches snapshot', () => {
    let community = shallow(<Community {...mockProps}/>, { disableLifecycleMethods: true });
    expect(community).toMatchSnapshot();
  });

  describe('componenDidMount', () => {

    it('calls api get post on load', () => {
      let community = shallow(<Community {...mockProps}/>);

      api.getPosts.mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve({data: []})
      }));

      community.instance().componentDidMount();
      expect(community.state().posts).toEqual([])
    });
  });

  describe('addPost', () => {
  
    it('sets the state with the list of posts', () => {
      community.state().posts = []
      const post = {content:'hello'}
      const expected = [{content:'hello'}]

      community.instance().addPost(post);

      expect(community.state().posts).toEqual(expected);
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