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

export class Main extends Component {
  constructor() {
    super()

    this.state = {
      location: ''
    }
  }

updateState = (e) => {
  const userInput = e.target.value
  this.setState({
    location: userInput
  })
  console.log(this.state)
}

fetchLocation = async (e) => {
  e.preventDefault()
  try {
  const location = this.state.location
  const url = 'https://api.awc.dance/autocomplete'
  const response = await fetch(url);
  const data = await response.json();
  console.log(data)
  } catch (error) {
    console.log(error)
  }
}


  
  
render () {
  return (
    <div>
      <div className='news-feed'>
        <div className='navBar-forum'>
          <NavBar />
          <div className='forum'>
            <div className='location'>
              <form>
                <input
                  onChange={(e) => this.updateState(e)}
                  placeholder='city'
                  className='city=input'
                />
                <button onClick={(e)=> this.fetchLocation(e)}/>
              </form>
              <NavLink to = '/community' className='active'>Community</NavLink> 
              <NavLink to='/studios'>Studios</NavLink> 
              <NavLink to='/events'>Events</NavLink> 
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
  suggestedEvents: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);