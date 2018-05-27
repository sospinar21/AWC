export const eventsReducer = (state = {}, action ) => {
  switch (action.type) {
    case 'ADD_EVENTS':
      return action.eventsData;

    default:
      return state;
  }
}