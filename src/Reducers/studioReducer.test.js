import { studiosReducer } from './studiosReducer';

describe('Studios reducer', () => {
  it('returns default state if the action type doesn\'t match', () => {
    let initialState = {};
    
    expect(studiosReducer(undefined, {})).toEqual(initialState);
  });

  it('returns state with new selectedStudio', () => {
    let initialState = {};
    let studiosData = {name: 'AWC'};
    let addselectedStudioAction = {
      type: 'ADD_STUDIOS',
      studiosData
    };

    let newState = studiosReducer(initialState, addselectedStudioAction);

    expect(newState).toEqual(studiosData);
  });
});