export const addEvents = (eventsData) => ({
  type: 'ADD_EVENTS',
  eventsData
});

export const addStudios = (studiosData) => ({
  type: 'ADD_STUDIOS',
  studiosData
});

export const addVideos = (videosData) => ({
  type: 'ADD_VIDEOS',
  videosData
});

export const addLocation = (location) => ({
  type: 'ADD_LOCATION',
  location
});

export const addSelectedStudio = (studio) => ({
  type: 'ADD_SELECTED_STUDIO',
  studio
});

export const addSelectedEvent = (selected) => ({
  type: 'ADD_SELECTED_EVENT',
  selected
});

export const addUser = (user) => ({
  type: 'ADD_USER',
  user
});