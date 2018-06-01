import React, { Component } from 'react';
import  ApiCalls  from '../../../Helper/ApiCalls/ApiCalls';
import { connect } from 'react-redux';
import { addStudios, addSelectedStudio } from '../../../Actions/actions';
import './Studios.css';
import MyMapComponent from '../Map/Map';
import PropTypes from 'prop-types';


export class Studios extends Component {
  constructor() {
    super()
    this.state = ({
      selectedStudio:false
    })
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
  console.log(studio,'here')
  let api = new ApiCalls();
  if (studio) {
    const reviews = api.fetchSingleStudio(studio)
      .then(response => this.props.addSelectedStudio(response)) 
    } else {
    return (
      <h1>Select a Studio</h1>
    )
  }
}

displaySelected = () => {
  if(this.props.selectedStudio) {
    
    return (
      <div key={1} className='suggStudio-cards'>
        {/* <div className='main-info'>
          <div className='img-box'>
            <img className='studio-img' src={studio.image} />
          </div>
          <div onClick= {() => this.displaySelected(studio.id)} className='description-container'>
            <div className='text-container'>
              <h4>{studio.title}</h4>
              <i className="material-icons">favorite</i><b>{studio.rating}</b>
            </div>
          </div>
        </div>  
        <div className='description'>
          <p>{studio.location.display_address[0]}</p>
          <p>{studio.location.display_address[1]}</p>          
          <p>{studio.phone}</p>              
        </div> */}
      </div>
    );
  }
}

displayStudios = () => {
  const studios = this.props.suggestedStudios.map(studio => {
    return (
      <div key={studio.id} className='suggStudio-cards' onClick= {() => this.displaySelected(studio)}>
        <div className='main-info'>
          <div className='img-box'>
            <img className='studio-img' src={studio.image} />
          </div>
          <div onClick= {() => this.fetchSelected(studio.id)} className='description-container'>
            <div className='text-container'>
              <h4>{studio.title}</h4>
              <i className="material-icons">favorite</i><b>{studio.rating}</b>
            </div>
          </div>
        </div>  
        <div className='description'>
          <p>{studio.location.display_address[0]}</p>
          <p>{studio.location.display_address[1]}</p>          
          <p>{studio.phone}</p>              
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
        <div className='selected-studio'>
          <MyMapComponent />
          {this.displaySelected()}
          <div className='b-description'>
          </div>
        </div>
        <div className ='studios'>
          {this.displayStudios()}
        </div>
      </div>
    );

  } else {
    return (
      <h1>Loading </h1>
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
  suggestedStudios: PropTypes.array,
  addStudios: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Studios);