import { combineReducers } from 'redux';
import { eventsReducer } from './eventsReducer';

export const rootReducer = combineReducers({
  suggestedEvents: eventsReducer
}); 