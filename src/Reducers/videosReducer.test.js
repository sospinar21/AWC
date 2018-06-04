import { videosReducer } from './videosReducer';

describe('Videosreducer', () => {
  it('returns default state if the action type doesn\'t match', () => {
    let initialState = {};
    
    expect(videosReducer(undefined, {})).toEqual(initialState);
  });

  it('returns state with new video', () => {
    let initialState = {};
    let videosData = {id: 'AFGHJK&9'};
    let addselectedStudioAction = {
      type: 'ADD_VIDEOS',
      videosData
    };

    let newState = videosReducer(initialState, addselectedStudioAction);

    expect(newState).toEqual(videosData);
  });
});