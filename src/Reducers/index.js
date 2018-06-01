import { combineReducers } from 'redux';
import { eventsReducer } from './eventsReducer';
import { studiosReducer } from './studiosReducer';
import { videosReducer } from './videosReducer';
import { locationReducer } from './locationReducer';
import { selectedStudioReducer } from './selectedStudioReducer';



export const rootReducer = combineReducers({
  suggestedEvents: eventsReducer,
  suggestedStudios: studiosReducer,
  suggestedVideos: videosReducer,
  location: locationReducer,
  selectedStudio: selectedStudioReducer
}); 