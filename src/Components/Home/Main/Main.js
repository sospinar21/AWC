import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Events from '../Events/Events';
import { NavBar } from '../../Home/NavBar/NavBar';
import Studios from '../Studios/Studios';
import './Main.css';
import Videos from '../Videos/Videos';
import Music from '../Music/Music';
import { Community } from '../Community/Community';
import ApiCalls from '../../../Helper/ApiCalls/ApiCalls';

export class Main extends Component {
  constructor() {
    super();

    this.state = {
      locations: []
    };
  }

updateState = (e) => {
  const userInput = e.target.value;
  this.fetchLocation(userInput);
}

fetchLocation = async (userInput) => {
  const api = new ApiCalls();
  const location = userInput;
  const suggestions = await api.fetchGoogle(location);
  await this.displaySuggestions(suggestions);
    
}

displaySuggestions = (suggestions) => {
  if (suggestions){  
    this.setState({locations:suggestions})
    console.log(this.state)
  } 
}

render () {

  const suggestions = this.state.locations.map((suggestion, index) => {
    return (
      <option key={index} value={suggestion}/>
    );
  });

  return (
    <div>
      <div className='news-feed'>
        <div className='navBar-forum'>
          <NavBar />
          <div className='forum'>
            <div className='location'>
              <form>
                <input
                  list='locations'
                  onChange={(e) => this.updateState(e)}
                  placeholder='city'
                  className='city=input'
                />
                <datalist id='locations'>
                  {suggestions}
                </datalist>
              </form>
              <NavLink to = '/community' className='active'>Community</NavLink> 
              <NavLink to='/studios'>Studios</NavLink> 
            </div>  
            <Community />
          </div>
        </div>
        <div className='side-container'>
          <div className='events-small'>
            <div className='titleFix'>
              <h3> Events </h3>
            </div>
            <br/>
            <Events />
          </div>
          <div className='studios-small'>
            <div className='titleFix'>
              <h3> Studios </h3>
            </div>
            <div className='map'></div>
          </div>
        </div> 
      </div>
      <div className='videos-small'>
        <Videos />
      </div>
      {/* <Music /> */}
    </div>
  );
}
}

export const mapStateToProps = (state) => {
  return ({
    suggestedEvents: state.suggestedEvents
  });
};

export const mapDispatchToProps = dispatch => ({
  
});

Main.propTypes = {
  suggestedEvents: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);