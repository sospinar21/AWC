import {Studios, mapStateToProps, mapDispatchToProps} from '../Studios/Studios';
import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import ApiCalls from '../../../Helper/ApiCalls/ApiCalls';


describe('Studios', () => {

  let studios;
  let mockProps;
  let api = new ApiCalls()

  beforeEach(() => {

    mockProps = {
      suggestedStudios: [{name: 'BPC',
        location:'denver'
      }],
      addStudios: jest.fn()
    };

    api.fetchEvents = jest.fn()
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({data: {}})
    }));

    studios = shallow(<Studios {...mockProps}/>, { disableLifecycleMethods: true });

  });

  it('matches snapshot', () => {
    expect(studios).toMatchSnapshot();
  });

  describe('componentDidMount', () => {
    it('calls fetchstudios', () => {

      studios.instance().componentDidMount()
      studios.instance().fetchStudios = jest.fn()
      expect(studios.instance().fetchStudios).toHaveBeenCalled()
    })
  })

  describe('fetchStudios', () => {

    it('calls window.fetch with the correct params', () => {
      const expected = ["https://api.awc.dance/?city=80202", {"headers": {"Content-type": "application/json"}, "method": "GET"}]
      studios.instance().fetchStudios()
      expect(window.fetch).toHaveBeenCalledWith(...expected)
    })

    it('calls props.addStudios', () => {

      studios.instance().fetchStudios()
      expect(mockProps.addStudios).toHaveBeenCalled()
    })
    
  })

  describe('displayEvents', () => {

    it('shows a default image if the event doesnt have one', () => {


      expect().toEqual()
    })
    
  })

  describe('eventsinMain', () => {
    
  })

  describe('mapStateToProps', () => {
    
    let mockDispatch;
    let suggestedStudios;
    let mappedProps

    it('returns an object with the suggestedStudios', () => {

      const mockState = {
        suggestedStudios: {name: 'BPC'}
      }

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(mockState);
      
    })
  })

  describe('mapDispatchToProps', () => {

    it('should call dispatch with the correct params', () => {
    
      let mockDispatch = jest.fn();
      let mappedProps = mapDispatchToProps(mockDispatch);
      
      const studiosData = {id: 1, title:'ASANA'}      
      const mockAction = {
        type: 'ADD_STUDIOS',
        studiosData
      };
  
      mappedProps.addStudios(studiosData);
      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    })

  })
});