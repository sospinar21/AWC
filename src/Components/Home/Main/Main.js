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
      locations: [],
      selectedLocation: '',
      communityActive:true,
      studiosActive: false
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
  } 
}

selectedLocation = () => {
  console.log('here')
}

makeStudioActive = () => {
  this.setState({
    communityActive: false,
    studiosActive: true
  })
}

makeCommunityActive = () => {
  this.setState({
    communityActive: true,
    studiosActive: false
  })
}

renderCommunityOrStudios = () => {
  return this.state.communityActive ? <Community /> : <Studios />
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
              <input
                list='locations'
                onChange={(e) => this.updateState(e)}
                placeholder='Start typing your City'
                className='city-input'
              />
              <datalist 
                onClick = {this.selectedLocation()}
                id='locations'>
                {suggestions}
              </datalist>
              <div className='btns'>
                <a
                  onClick={() => this.makeCommunityActive()}
                  className='active'>Posts</a> 
                <a
                  onClick={() => this.makeStudioActive()}
                >Studios</a> 
              </div>
            </div>  
            {this.renderCommunityOrStudios()}
          </div>
        </div>
        <div className='side-container'>
          <div className='titleFix'>
            <a>Events </a>
          </div>
          <div className='events-small'>
            <br/>
            <Events />
          </div>
          <div className='titleFix'>
            <a>Music </a>
          </div>
          <div className='studios-small'>
            <div className='map'></div>
          </div>
        </div> 
      </div>
      {/* <div className='videos-small'>
        <Videos />
      </div> */}
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