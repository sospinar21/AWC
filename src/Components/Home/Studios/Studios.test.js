import {Studios, mapStateToProps, mapDispatchToProps} from '../Studios/Studios';
import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';


describe('Studios', () => {

  let studios;
  let mockProps;

  beforeEach(() => {

    mockProps = {
      suggestedStudios: [{name: 'party',
      location:'denver'
    }],
      addStudios: jest.fn()
    };

    studios = shallow(<Studios {...mockProps}/>, { disableLifecycleMethods: true });

  });

  it('matches snapshot', () => {
    expect(studios).toMatchSnapshot();
  });
});