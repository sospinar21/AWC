import React, { Component } from 'react';
import  ApiCalls  from '../../../Helper/ApiCalls/ApiCalls';
import { connect } from 'react-redux';
import { addStudios, addSelectedStudio } from '../../../Actions/actions';
import './Studios.css';
import MyMapComponent from '../Map/Map';
import PropTypes from 'prop-types';


export class Studios extends Component {
  constructor() {
    super();
    this.state = ({
      selectedStudio:false
    });
  }

  componentDidMount() {
    const city = this.props.selectedLocation;
    const selectedLocation = city.length ? city : 'usa';
    this.fetchStudios(selectedLocation);
  }

fetchStudios = async (city) => {
  let api = new ApiCalls();
  const suggestedStudios = await api.fetchStudios(city);
  await this.props.addStudios(suggestedStudios);
}

fetchSelected = (studio) => {
  let api = new ApiCalls();
  if (studio) {
    const reviews = api.fetchSingleStudio(studio.id)
      .then(response => this.props.addSelectedStudio({...response, ...studio})); 
  } else {
    return (
      <h1>Select a Studio</h1>
    );
  }
}

displaySelected = () => {
  const selected = this.props.selectedStudio;
  const review = selected.rating * 20
  if (selected.id) { 
    return (
      <div key={1} className='selected-card'> 
        <div className='map'>
          <MyMapComponent />
        </div> 
        <div className='description-box'>    
          <div className='description-container'>
            <div className='text-container'>
              <h4>{selected.title}</h4>
              <div className="stars">
                <div>
                  <img src={require('../../../assets/regular_0.png')} />
                </div>
                <div className="redStars" style={{ "width": `${review}%` }}>
                  <img src={require('../../../assets/regular_5@3x.png')} />
                </div>
              </div>
            </div>
          </div> 
          <div className='description'>
            <p>{selected.location.display_address[0]}</p>
            <p>{selected.location.display_address[1]}</p>          
            <p className='phone'>{selected.phone}</p>              
          </div>
        </div>
      </div>
    );
  }
}

displayStudios = () => {
  const studios = this.props.suggestedStudios.map(studio => {
    return (
      <div className="post" key={studio.id} onClick={() => this.fetchSelected(studio)}>
        <div className="poster poster-studio">
          <b className='event-b'>{studio.title}</b>
          <div className='description'>
            <p>{studio.location.display_address[0]}</p>
            <p>{studio.location.display_address[1]}</p>          
            <p className='phone'>{studio.phone}</p>              
          </div>
          <br/>
        </div>
        <div className="content content-s">
          <img className='studio-img' src={studio.image} />
        </div>
      </div> 
    );
  });

  return studios;
}


render () {  
  if (this.props.suggestedStudios.length) {
    return (
      <div className='studiocards-container'>
        <div className='selected-studio-box'>
          <div className='featured-studio-text'>
            <h1>Studios</h1>
            <h2>Find studios around the world</h2>
            <p>click below!</p>
          </div>
          {this.displaySelected()}
        </div>
        <div className ='studios'>
          {this.displayStudios()}
        </div>
      </div>
    );

  } else {
    return (
      <div className='loading'>
        <h1 >Loading...</h1>
      </div>
    );
  }
}
}

export const mapStateToProps = (state) => {
  return ({
    suggestedStudios: state.suggestedStudios,
    selectedLocation: state.location,
    selectedStudio: state.selectedStudio
  });
};

export const mapDispatchToProps = dispatch => ({
  addStudios: (studiosData) => dispatch(addStudios(studiosData)),
  addSelectedStudio: (selected) => dispatch(addSelectedStudio(selected))
});

Studios.propTypes = {
  suggestedStudios: PropTypes.object,
  addStudios: PropTypes.func,
  addSelectedStudio: PropTypes.func,
  selectedStudio: PropTypes.object,
  selectedLocation: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(Studios);