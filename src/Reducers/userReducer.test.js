import { userReducer } from './userReducer';

describe('user reducer', () => {
  it('returns default state if the action type doesn\'t match', () => {
    let initialState = {};
    
    expect(userReducer(undefined, {})).toEqual(initialState);
  });

  it('returns state with new user', () => {
    let initialState = {};
    let user = {namename: 'STEPH'};
    let addsUserAction = {
      type: 'ADD_USER',
      user
    };

    let newState = userReducer(initialState, addsUserAction);

    expect(newState).toEqual(user);
  });
});