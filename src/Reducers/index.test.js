import { combineReducers } from 'redux';
import { eventsReducer } from './eventsReducer';
import { studiosReducer } from './studiosReducer';
import { videosReducer } from './videosReducer';
import { locationReducer } from './locationReducer';
import { selectedStudioReducer } from './selectedStudioReducer';
import { selectedEventReducer } from './selectedEventReducer';
import { userReducer } from './userReducer';
import { rootReducer } from './index'
import { createStore } from 'redux';

describe('Combine Reducers', () => {
  it('returns rootReducer when called', () => {
    let store = createStore(rootReducer)

    expect(store.getState().suggestedEvents).toEqual(eventsReducer(undefined, {}))
    expect(store.getState().suggestedStudios).toEqual(studiosReducer(undefined, {}))
    expect(store.getState().suggestedVideos).toEqual(videosReducer(undefined, {}))
    expect(store.getState().location).toEqual(locationReducer(undefined, {}))
    expect(store.getState().selectedStudio).toEqual(selectedStudioReducer(undefined, {}))
    expect(store.getState().selectedEvent).toEqual(selectedEventReducer(undefined, {}))
    expect(store.getState().user).toEqual(userReducer(undefined, {}))
  });
})