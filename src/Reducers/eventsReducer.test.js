import { eventsReducer } from './eventsReducer';

describe('events reducer', () => {
  it('returns default state if the action type doesn\'t match', () => {
    let initialState = {};
    
    expect(eventsReducer(undefined, {})).toEqual(initialState);
  });

  it('returns state with new events', () => {
    let initialState = [];
    let eventsData = {name: 'workshop'};
    let addEventAction = {
      type: 'ADD_EVENTS',
      eventsData
    };

    let newState = eventsReducer(initialState, addEventAction);

    expect(newState).toEqual(eventsData);
  });
});