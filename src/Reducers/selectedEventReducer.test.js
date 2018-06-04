import { selectedEventReducer } from './selectedEventReducer';

describe('selectedEvent reducer', () => {
  it('returns default state if the action type doesn\'t match', () => {
    let initialState = {};
    
    expect(selectedEventReducer(undefined, {})).toEqual(initialState);
  });

  it('returns state with new selectedEvent', () => {
    let initialState = {};
    let selected = {name: 'anniversary'};
    let addselectedEventAction = {
      type: 'ADD_SELECTED_EVENT',
      selected
    };

    let newState = selectedEventReducer(initialState, addselectedEventAction);

    expect(newState).toEqual(selected);
  });
});