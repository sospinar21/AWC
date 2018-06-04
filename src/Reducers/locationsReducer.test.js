import { locationReducer } from './locationReducer';

describe('location reducer', () => {
  it('returns default state if the action type doesn\'t match', () => {
    let initialState = '';
    
    expect(locationReducer(undefined, {})).toEqual(initialState);
  });

  it('returns state with new location', () => {
    let initialState = '';
    let location = 'Denver';
    let addLocationAction = {
      type: 'ADD_LOCATION',
      location
    };

    let newState = locationReducer(initialState, addLocationAction);

    expect(newState).toEqual(location);
  });
});