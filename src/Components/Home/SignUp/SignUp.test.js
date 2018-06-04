import {SignUp, mapStateToProps, mapDispatchToProps} from '../SignUp/SignUp'
import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';

describe('signUp', () => {

  let signUp
  let mockProps;

  beforeEach(() => {

    mockProps = {
      suggestedEvents: [{name: 'party'}],
      user: {namename:'Steph'},
      addUser: jest.fn(),
    }

    signUp = shallow(<signUp {...mockProps}/> , { disableLifecycleMethods: true })

  })

  it('matches snapshot', () => {
    expect(signUp).toMatchSnapshot();
  })

})