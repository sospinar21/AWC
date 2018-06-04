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

  describe('addVideos', () => {
    it('has a type of ADD_VIDEOS', () => {
      let mockVideo = {videosData: 'A8hbha1'};

      let actual = addVideos(mockVideo);

      expect(actual.type).toEqual('ADD_VIDEOS');
    });

    it('should add video data to the addVideos action', () => {
      let mockVideo = {videosData: 'A8hbha1'};

      let actual = addVideos(mockVideo);

      expect(actual.videosData).toEqual(mockVideo);
    });
  });

  describe('addlocation', () => {
    it('has a type of ADD_LOCATION', () => {
      let mocklocation = 'denver';

      let actual = addLocation(mocklocation);

      expect(actual.type).toEqual('ADD_LOCATION');
    });

    it('should add location data to the addlocation action', () => {
      let mocklocation = 'denver';

      let actual = addLocation(mocklocation);

      expect(actual.location).toEqual(mocklocation);
    });
  });

  describe('addSelectedStudio', () => {
    it('has a type of ADD_SELECTED_STUDIO', () => {
      let mockStudio = {studiosData: 'AWC'};

      let actual = addSelectedStudio(mockStudio);

      expect(actual.type).toEqual('ADD_SELECTED_STUDIO');
    });

    it('should add studios data to the addSelectedStudio action', () => {
      let mockStudio = {studiosData: 'AWC'};

      let actual = addSelectedStudio(mockStudio);

      expect(actual.studio).toEqual(mockStudio);
    });
  });

  describe('addSelectedEvent', () => {
    it('has a type of ADD_SELECTED_EVENT', () => {
      let mockEvent = {eventsData: 'workshop'};

      let actual = addSelectedEvent(mockEvent);

      expect(actual.type).toEqual('ADD_SELECTED_EVENT');
    });

    it('should add selected event data to the addSelectedEvent action', () => {
      let mockEvent = {eventsData: 'workshop'};

      let actual = addSelectedEvent(mockEvent);

      expect(actual.selected).toEqual(mockEvent);
    });
  });

  describe('addUser', () => {
    it('has a type of ADD_USER', () => {
      let mockUser = {username: 'Steph'};

      let actual = addUser(mockUser);

      expect(actual.type).toEqual('ADD_USER');
    });

    it('should add user data to the addUser action', () => {
      let mockEvent = {username: 'Steph'};

      let actual = addUser(mockEvent);

      expect(actual.user).toEqual(mockEvent);
    });
  });
  
});