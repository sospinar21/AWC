import { addEvents, addStudios, addVideos, addLocation, addSelectedStudio, addSelectedEvent,addUser } from './actions';

describe('Actions', () => {
  describe('addEvents', () => {
    it('has a type of ADD_EVENTS', () => {
      let mockEvent = {eventsData: 'workshop'};

      let actual = addEvents(mockEvent);

      expect(actual.type).toEqual('ADD_EVENTS');
    });

    it('should add event data to the addEvent action', () => {
      let mockEvent = {eventsData: 'workshop'};

      let actual = addEvents(mockEvent);

      expect(actual.eventsData).toEqual(mockEvent);
    });
  });
  describe('addStudio', () => {
    it('has a type of ADD_STUDIOS', () => {
      let mockStudio = {studiosData: 'AWC'};

      let actual = addStudios(mockStudio);

      expect(actual.type).toEqual('ADD_STUDIOS');
    });

    it('should add studios data to the addStudio action', () => {
      let mockStudio = {studiosData: 'AWC'};

      let actual = addStudios(mockStudio);

      expect(actual.studiosData).toEqual(mockStudio);
    });
  });
  
});