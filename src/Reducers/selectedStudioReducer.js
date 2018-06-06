export const selectedStudioReducer = (state = {}, action ) => {
  switch (action.type) {
    case 'ADD_SELECTED_STUDIO':
      return action.studio;

    default:
      return state;
  }
};