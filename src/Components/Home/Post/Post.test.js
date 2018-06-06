import {Post, mapStateToProps, mapDispatchToProps} from '../Post/Post'
import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import ApiCalls from '../../../Helper/ApiCalls/ApiCalls';

describe('Post', () => {
  let post;
  let mockProps;
  let event;
  const api = new ApiCalls();

  beforeEach(() => {
    mockProps = {
      addUser: jest.fn(),
      user: {username:'Laura'},
      addPost: jest.fn()
    };

    post = shallow(<Post {...mockProps}/>, { disableLifecycleMethods: true });

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
    let post = shallow(<Post {...mockProps}/>, { disableLifecycleMethods: true });
    expect(post).toMatchSnapshot();
  });

  describe('getPost', () => {

    it('sets the state with the selected location', () => {
      
      event = {
        target: {
          name: 'content',
          value: 'Dancer for ever'
        },
        preventDefault: () => {}
      };

      post.instance().getPost(event);

      expect(post.state().content).toEqual('Dancer for ever');
    });
  });

  describe('sendPost', () => {

    it('calls props.addPost', () => {
      
      post.instance().sendPost(event);

      expect(mockProps.addPost).toHaveBeenCalled()
    });

    it('sets the state to default', () => {
      
      post.state().content = 'Dancer for ever'

      post.instance().sendPost(event);

      expect(post.state().content).toEqual('');
    });
  });

  describe('sendToLambda', () => {
  
    it('calls fetchGoogle with the correct params', async () => {
      
      const expected = 'https://api.awc.dance/postcomment?name=Laura&content=&type=Post'

      post.instance().sendToLambda();

      expect(window.fetch).toHaveBeenCalledWith(expected)
    });
  });

  describe('validatePost', () => {

    it('returns true if the input is empty', () => {
      
      post.state().content = ''

      const validate = post.instance().validatePost();

      expect(validate).toEqual(true);
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

  describe('mapDispatchToProps', () => {

    it('should call dispatch with the correct params', () => {
    
      let mockDispatch = jest.fn();
      let mappedProps = mapDispatchToProps(mockDispatch);
      
      const user = {name:'Steph'};      
      const mockAction = {
        type: 'ADD_USER',
        user
      };
  
      mappedProps.addUser(user);
      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

  });

});