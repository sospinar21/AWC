import { combineReducers } from 'redux';
import { eventsReducer } from './eventsReducer';
import { studiosReducer } from './studiosReducer';

export const rootReducer = combineReducers({
  suggestedEvents: eventsReducer,
  suggestedStudios: studiosReducer
}); 