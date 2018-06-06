export const selectedEventReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_SELECTED_EVENT':
      return action.selected;
    default:
      return state;
  }
};