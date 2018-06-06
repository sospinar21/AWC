import { combineReducers } from 'redux';
import { eventsReducer } from './eventsReducer';
import { studiosReducer } from './studiosReducer';
import { videosReducer } from './videosReducer';
import { locationReducer } from './locationReducer';
import { selectedStudioReducer } from './selectedStudioReducer';
import { selectedEventReducer } from './selectedEventReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  suggestedEvents: eventsReducer,
  suggestedStudios: studiosReducer,
  suggestedVideos: videosReducer,
  location: locationReducer,
  selectedStudio: selectedStudioReducer,
  selectedEvent: selectedEventReducer,
  user: userReducer
}); 