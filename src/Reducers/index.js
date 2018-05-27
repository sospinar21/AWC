import { combineReducers } from 'redux';
import { eventsReducer } from './eventsReducer';
import { studiosReducer } from './studiosReducer';
import { videosReducer } from './videosReducer';



export const rootReducer = combineReducers({
  suggestedEvents: eventsReducer,
  suggestedStudios: studiosReducer,
  suggestedVideos: videosReducer
}); 