
export const studiosReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_STUDIOS':
      return action.studiosData;

    default:
      return state;
  }
};