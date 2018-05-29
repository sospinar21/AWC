import {Videos, mapStateToProps, mapDispatchToProps} from '../Videos/Videos'
import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';

describe('videos', () => {

  let videos
  let mockProps

  beforeEach(() => {

    mockProps = {
      suggestedVideos: [{id: 'dance'}],
      addVideos: jest.fn()
    }

    videos = shallow(<Videos  {...mockProps}/> , { disableLifecycleMethods: true })

  })

  it('matches snapshot', () => {
    expect(videos).toMatchSnapshot();
  })
})