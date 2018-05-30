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
import { addLocation } from '../../../Actions/actions'

export class Main extends Component {
  constructor() {
    super();

    this.state = {
      locations: [],
      selectedLocation:'',
      communityActive:true,
      studiosActive: false
    };
  }

updateState = (e) => {
  const userInput = e.target.value;
  this.setState({selectedLocation:userInput})
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

selectedLocation = (e) => {
  e.preventDefault()
  this.props.addLocation(this.state.selectedLocation)
}

makeStudioActive = () => {
  this.setState({
    communityActive: !this.state.communityActive,
    studiosActive: !this.state.studiosActive
  })
}

renderCommunityOrStudios = () => {
  return this.state.communityActive ? <Community /> : <Studios />
}

render () {
  const suggestions = this.state.locations.map((suggestion, index) => {
    return (
      <option 
        onClick = {() => this.selectedLocation()}
        key={index} value={suggestion}/>
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
                  type='text'
                  list='locations'
                  onInput={(e) => this.updateState(e)}
                  placeholder='Start typing your City'
                  className='city-input'
                />
                <button 
                  className='submit-location'
                  onClick = {(e) => this.selectedLocation(e)}>Search</button>
              </form>
              <datalist 
                id='locations'>
                {suggestions}
              </datalist>
              <div className='btns'>
                <a
                  onClick={() => this.makeStudioActive()}
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
    suggestedEvents: state.suggestedEvents,
    selectedLocation: state.location
  });
};

export const mapDispatchToProps = dispatch => ({
  addLocation: (location) => dispatch(addLocation(location))
});

Main.propTypes = {
  suggestedEvents: PropTypes.array,
  addLocation: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);