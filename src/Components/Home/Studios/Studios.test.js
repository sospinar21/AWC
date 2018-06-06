import {Studios, mapStateToProps, mapDispatchToProps} from '../Studios/Studios';
import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import ApiCalls from '../../../Helper/ApiCalls/ApiCalls';


describe('Studios', () => {

  let studios;
  let mockProps;
  let api = new ApiCalls();

  beforeEach(() => {

    mockProps = {
      suggestedStudios: {
        studio: {location: {display_address: []}}
      },
      selectedLocation: 'Denver',
      selectedStudio: {id:2},
      addStudios: jest.fn(),
      addSelectedStudio: jest.fn()
    };

    api.fetchEvents = jest.fn();
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({data: {}})
    }));

    studios = shallow(<Studios {...mockProps}/>, { disableLifecycleMethods: true });

  });

  it('matches snapshot', () => {
    expect(studios).toMatchSnapshot();
  });

  describe('fetchStudios', () => {

    it('calls window.fetch', () => {

      studios.instance().fetchStudios();
      expect(window.fetch).toHaveBeenCalled();
    });

    it('calls props.addStudios', async () => {

      await studios.instance().fetchStudios();

      expect(mockProps.addStudios).toHaveBeenCalled();
    });
    
  });

  describe('fetchSelected', () => {
    it('calls window.fetch', () => {
      const studio = {id: 3};
      studios.instance().fetchSelected(studio);
      expect(window.fetch).toHaveBeenCalledWith("https://api.awc.dance/single-studio?id=3");
    });
  });

  describe('mapStateToProps', () => {
    
    let mockDispatch;
    let suggestedStudios;
    let mappedProps;

    it('returns an object with the suggestedStudios', () => {

      const mockState = {
        suggestedStudios: {name: 'BPC'}
      };

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(mockState);
      
    });
  });

  describe('mapDispatchToProps', () => {

    it('should call dispatch with the correct params', () => {
    
      let mockDispatch = jest.fn();
      let mappedProps = mapDispatchToProps(mockDispatch);
      
      const studiosData = {id: 1, title:'ASANA'};      
      const mockAction = {
        type: 'ADD_STUDIOS',
        studiosData
      };
  
      mappedProps.addStudios(studiosData);
      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it('should call dispatch with the correct params', () => {
    
      let mockDispatch = jest.fn();
      let mappedProps = mapDispatchToProps(mockDispatch);
      
      const studio = {id: 1, title:'BPC'};      
      const mockAction = {
        type: 'ADD_SELECTED_STUDIO',
        studio
      };
  
      mappedProps.addSelectedStudio(studio);
      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });


  });
});