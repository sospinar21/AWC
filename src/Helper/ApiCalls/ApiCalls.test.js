import ApiCalls from '../ApiCalls/ApiCalls'
import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';

describe('apiCalls', () => {
  let apiCalls = new ApiCalls();

  beforeEach(() => {

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({data: {}})
    }));


  });

  describe('fetchEvents', () => {
    
    describe('fetchEvents if the status is ok', () => {
      it('calls fetchEvents with the correct params', () => {
        
        const city = 'Denver'
        const expected = 'https://api.awc.dance/events?city=Denver'

        apiCalls.fetchEvents(city);

        expect(window.fetch).toHaveBeenCalledWith(expected)
      });
    })

    describe('fetchEvents if the status is not ok', () => {

      it('throws an error if fetch fails', async () => {
        window.fetch = jest
          .fn()
          .mockImplementation(() => Promise.reject(new Error('Error')));
        const expected = new Error('Error');
    
        await expect(apiCalls.fetchEvents()).rejects.toEqual(expected);
      });
    });
  });

  describe('fetchStudios', () => {
    
    describe('fetchStudios if the status is ok', () => {
      it('calls window.fetch', () => {
        
        const city = 'Denver'

        apiCalls.fetchStudios(city);

        expect(window.fetch).toHaveBeenCalled()
      });
    })

    describe('fetchStudios if the status is not ok', () => {

      it('throws an error if fetch fails', async () => {
        window.fetch = jest
          .fn()
          .mockImplementation(() => Promise.reject(new Error('Error')));
        const expected = new Error('Error');
    
        await expect(apiCalls.fetchStudios()).rejects.toEqual(expected);
      });
    });
  });
  
  describe('fetchVideos', () => {
    
    describe('fetchVideos if the status is ok', () => {
      it('calls window.fetch with the correct params', () => {

        const expected = 'https://api.awc.dance/youtubevideos'

        apiCalls.fetchVideos();

        expect(window.fetch).toHaveBeenCalledWith(expected)
      });
    })

    describe('fetchEvents if the status is not ok', () => {

      it('throws an error if fetch fails', async () => {
        window.fetch = jest
          .fn()
          .mockImplementation(() => Promise.reject(new Error('Error')));
        const expected = new Error('Error');
    
        await expect(apiCalls.fetchVideos()).rejects.toEqual(expected);
      });
    });
  });

 

});