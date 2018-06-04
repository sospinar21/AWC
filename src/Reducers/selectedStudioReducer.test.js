import { selectedStudioReducer } from './selectedStudioReducer';

describe('selectedStudio reducer', () => {
  it('returns default state if the action type doesn\'t match', () => {
    let initialState = {};
    
    expect(selectedStudioReducer(undefined, {})).toEqual(initialState);
  });

  it('returns state with new selectedStudio', () => {
    let initialState = {};
    let studio = {name: 'AWC'};
    let addselectedStudioAction = {
      type: 'ADD_SELECTED_STUDIO',
      studio
    };

    let newState = selectedStudioReducer(initialState, addselectedStudioAction);

    expect(newState).toEqual(studio);
  });
});