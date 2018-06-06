import {SelectedEvent, mapStateToProps} from '../SelectedEvent/SelectedEvent';
import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import ApiCalls from '../../../Helper/ApiCalls/ApiCalls';

describe('selectedEvent', () => {
  let selectedEvent;
  let mockProps;
  const api = new ApiCalls();

  beforeEach(() => {
    mockProps = {
      selectedEvent: {name: 'Workshop'},
    };

    selectedEvent = shallow(<SelectedEvent {...mockProps}/>, { disableLifecycleMethods: true });

  });

  it('matches snapshot', () => {
    let selectedEvent = shallow(<SelectedEvent {...mockProps}/>, { disableLifecycleMethods: true });
    expect(selectedEvent).toMatchSnapshot();
  });

  
  describe('mapStateToProps', () => {

    let mappedProps

    it('returns an object with the user', () => {

      const mockState = {
        selectedEvent: {name: 'workshop'}
      }

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(mockState);
      
    })
  })

});