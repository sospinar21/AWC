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
import Community from '../Community/Community';
import ApiCalls from '../../../Helper/ApiCalls/ApiCalls';
import { addLocation, addEvents, addStudios } from '../../../Actions/actions'
import  SelectedEvent  from '../SelectedEvent/SelectedEvent';

export class Main extends Component {
  constructor() {
    super();

    this.state = {
      locations: [],
      selectedLocation:'',
      communityActive:true,
      studiosActive: false,
      eventsActive:false
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

selectedLocation = async (e) => {
  e.preventDefault()
  const api = new ApiCalls()
  this.props.addLocation(this.state.selectedLocation)
  const suggestedEvents = await api.fetchEvents(this.state.selectedLocation)
  const suggestedStudios = await api.fetchStudios(this.state.selectedLocation)
  this.props.addEvents(suggestedEvents)
  this.props.addStudios(suggestedStudios)
}

makeStudioActive = () => {
  this.setState({
    communityActive: false,
    studiosActive: true,
    eventsActive:false
  })
}

makeCommunityActive = () => {
  this.setState({
    communityActive: true,
    studiosActive: false,
    eventsActive:false
  })
}

makeEventsActive = () => {
  this.setState({
    communityActive: false,
    studiosActive: false,
    eventsActive: true
  })
}


renderCommunityOrStudios = () => {
  if(this.state.studiosActive === true){
    return <Studios />
  } else if (this.state.eventsActive === true) {
    return <div className='main-events'> 
      <SelectedEvent />
      <Events /> </div>
  } else {
    return <Community /> 
  }
}


render () {
  const suggestions = this.state.locations.map((suggestion, index) => {
    return (
      <option 
        onClick = {() => this.selectedLocation()}
        key={index} value={suggestion}/>
    );
  });

  const city = this.props.selectedLocation;
  const selectedLocation = city.length ? city : 'USA'

  return (
    <div>
      <div className='news-feed'>
        <div className='navBar-forum'>
          <NavBar />
          <div className='forum'>
            <div className='location'>
              <form className='location-form'>
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
              <div className='actual-location'>
                <i className="material-icons">location_on</i>
                <h1>{selectedLocation}</h1>
              </div>
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
          <div className='titleFix' onClick={this.makeEventsActive}>
            <a>Events </a>
          </div>
          <div className='events-small' onClick={this.makeEventsActive}>
            <br/>
            <Events />
          </div>
          <div className='titleFix'>
            <a>Music </a>
          </div>
          <div className='studios-small'>
            <div className='music'></div>
          </div>
        </div> 
      </div>
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
  addLocation: (location) => dispatch(addLocation(location)),
  addEvents: (eventsData) => dispatch(addEvents(eventsData)),
  addStudios: (studiosData) => dispatch(addStudios(studiosData))  
});

Main.propTypes = {
  suggestedEvents: PropTypes.array,
  addLocation: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);