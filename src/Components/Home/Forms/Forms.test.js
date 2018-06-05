import { Forms, mapStateToProps } from '../Forms/Forms'
import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import  ApiCalls  from '../../../Helper/ApiCalls/ApiCalls';


describe('forms', () => {
  let forms;
  let mockProps;

  beforeEach(() => {

    mockProps = {
      suggestedEvents: [{name: 'party'}],
    }

    forms = shallow(<Forms {...mockProps} /> )

  })

  it('matches snapshot', () => {
    expect(forms).toMatchSnapshot();
  })

  describe('showLogIn', () => {

    it('sets the the state to login: true', () => {

      forms.state().logIn = false

      forms.instance().showLogIn()

      expect(forms.state().logIn).toEqual(true)
    })
    
  })

  it('sets the the state to signUp: false', () => {

    forms.state().signUp = true

    forms.instance().showLogIn()

    expect(forms.state().signUp).toEqual(false)
  })

  describe('showSignUp', () => {

    it('sets the the state to login: false', () => {

      forms.state().logIn = true

      forms.instance().showSignUp()

      expect(forms.state().logIn).toEqual(false)
    })
    
  })

  it('sets the the state to signUp: true', () => {

    forms.state().signUp = false

    forms.instance().showSignUp()

    expect(forms.state().signUp).toEqual(true)
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
