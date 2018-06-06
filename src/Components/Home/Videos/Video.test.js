import {Videos, mapStateToProps, mapDispatchToProps} from '../Videos/Videos'
import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';

describe('videos', () => {

  let videos
  let mockProps

  beforeEach(() => {

    mockProps = {
      suggestedVideos: [{id: 'dance', snippet:{thumbnails:{medium:'here'}}}],
      addVideos: jest.fn()
    }

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({data: {}})
    }));

    videos = shallow(<Videos  {...mockProps}/> , { disableLifecycleMethods: true })

  })

  it('matches snapshot', () => {
    expect(videos).toMatchSnapshot();
  })

  describe('fetchVideos', () => {

    it('calls props.addvideos', async () => {

      await videos.instance().fetchVideos()
      expect(mockProps.addVideos).toHaveBeenCalled();
      
    })
  })

  describe('displaySelectedVideo', () => {

    it('updates the state', async () => {
      const id = 20
      const title = 'Dancer'
      await videos.instance().displaySelectedVideo(id, title)
      expect(videos.state().selectedVideo).toEqual(20);
      
    })
  })

  describe('mapStateToProps', () => {

    let mappedProps

    it('returns an object with the user', () => {

      const mockState = {
        suggestedVideos: {name: 'workshop'}
      }

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(mockState);
      
    })
  })
})