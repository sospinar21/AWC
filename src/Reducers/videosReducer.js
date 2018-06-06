export const videosReducer = (state = {}, action ) => {
  switch (action.type) {
    case 'ADD_VIDEOS':
      return action.videosData;

    default:
      return state;
  }
};