import { Entertainment, mapStateToProps } from '../Entertainment/Entertainment'
import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import  ApiCalls  from '../../../Helper/ApiCalls/ApiCalls';


describe('entertaiment', () => {
  let entertaiment;
  let mockProps;

  beforeEach(() => {

    mockProps = {
      suggestedEvents: [{name: 'party'}],
    }

    entertaiment = shallow(<Entertainment {...mockProps} /> )

  })

  it('matches snapshot', () => {
    expect(entertaiment).toMatchSnapshot();
  })

  describe('mapStateToProps', () => {
    
    let suggestedEvents;
    let mappedProps

    it('returns an object with the suggestedEvents', () => {

      const mockState = {
        suggestedEvents: {name: 'Workshop'}
      }

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(mockState);
      
    })
  })
})
