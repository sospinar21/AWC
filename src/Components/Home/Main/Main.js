import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Events from '../Events/Events';
import NavBar from '../../Home/NavBar/NavBar';
import Studios from '../Studios/Studios';
import './Main.css';
import Videos from '../Videos/Videos';
import Community from '../Community/Community';
import ApiCalls from '../../../Helper/ApiCalls/ApiCalls';
import { addLocation, addEvents, addStudios } from '../../../Actions/actions';
import  SelectedEvent  from '../SelectedEvent/SelectedEvent';
import { userSignout } from '../../../Helper/Users/Users';

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
  this.setState({selectedLocation:userInput});
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
    this.setState({locations:suggestions});
  } 
}

selectedLocation = async (e) => {
  e.preventDefault();
  const api = new ApiCalls();
  this.props.addLocation(this.state.selectedLocation);
  const suggestedEvents = await api.fetchEvents(this.state.selectedLocation);
  const suggestedStudios = await api.fetchStudios(this.state.selectedLocation);
  this.props.addEvents(suggestedEvents);
  this.props.addStudios(suggestedStudios);
}

makeStudioActive = () => {
  this.setState({
    communityActive: false,
    studiosActive: true,
    eventsActive:false
  });
}

makeCommunityActive = () => {
  this.setState({
    communityActive: true,
    studiosActive: false,
    eventsActive:false
  });
}

makeEventsActive = () => {
  this.setState({
    communityActive: false,
    studiosActive: false,
    eventsActive: true
  });
}


renderCommunityOrStudios = () => {
  if (this.state.studiosActive === true){
    return <Studios />;
  } else if (this.state.eventsActive === true) {
    return <div>
      <div className='selected-event'>
        <SelectedEvent />
      </div>
      <div className='main-events'> 
        <Events /> </div>
    </div>;
  } else {
    return <Community />; 
  }
}

suggestLocation = () => {
  const suggestions = this.state.locations.map((suggestion, index) => {
    return (
      <option 
        onClick = {() => this.selectedLocation()}
        key={index} value={suggestion}/>
    );
  });
  return suggestions;
}


render () {
  

  const city = this.props.selectedLocation;
  const selectedLocation = city.length ? city : 'USA';
  const singinOut =  this.props.user.username ? <div className="txt" onClick={() => userSignout()}>Log Out</div> : <div className="txt">Sign Up/ SignIn</div>;

  return (
    <div className='body'>
      <div className="nav">
        <div className="logo">
          <div className="logocir">AWC</div>
        </div>

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
          {this.suggestLocation()}
        </datalist>
        <div className='actual-location'>
          <i className="material-icons">location_on</i>
          <h1>{selectedLocation}</h1>
        </div>

        <div className="buffer"></div>
        <NavLink to='/signin' className="signink">
          <div className="txt">{singinOut}</div>
          <div className="ico">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
          </div>
        </NavLink>
      </div>
      <div className="main">
        <div className="profile box">
          <NavBar makeCommunityActive={this.makeCommunityActive}
            makeEventsActive={this.makeEventsActive}
            makeStudioActive={this.makeStudioActive}
          />
        </div>
        <div className="posts box">
          <div className="filters">
            <NavLink to='/' className='main-btn' onClick={() => this.makeCommunityActive()}>Post!</NavLink>
            <NavLink to='/entertainment' className='main-btn'>Videos</NavLink>
            <button className='main-btn' onClick={() => this.makeEventsActive()}>Events</button>
            <button className='main-btn' onClick={() => this.makeStudioActive()}>Studios</button>
          </div>
          <div className="main-box">
            {this.renderCommunityOrStudios()}
          </div> 
        </div>
        <div className="stack">
          <div id="studios" className="stacked  box">
          </div>
          <div id="featured" className="stacked  box">
            <h3>Featured Video</h3>
            <iframe width="350" height="215" src="https://www.youtube.com/embed/2X2tCidTfEU?rel=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
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
    selectedLocation: state.location,
    user: state.user
  });
};

export const mapDispatchToProps = dispatch => ({
  addLocation: (location) => dispatch(addLocation(location)),
  addEvents: (eventsData) => dispatch(addEvents(eventsData)),
  addStudios: (studiosData) => dispatch(addStudios(studiosData))  
});

Main.propTypes = {
  suggestedEvents: PropTypes.object,
  addLocation: PropTypes.func,
  addEvents: PropTypes.func,
  addStudios: PropTypes.func,
  selectedLocation: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);