import React, { Component } from 'react';
import  ApiCalls  from '../../../Helper/ApiCalls/ApiCalls';
import { connect } from 'react-redux';
import { addStudios } from '../../../Actions/actions';
import './Studios.css';
import ReactGoogleMaps from '../Map/Map'
import PropTypes from 'prop-types';


export class Studios extends Component {


  componentDidMount() {
    const city = this.props.selectedLocation;
    const selectedLocation = city.length ? city : 'usa'
    this.fetchStudios(selectedLocation);
  }

fetchStudios = async (city) => {
  let api = new ApiCalls();
  const suggestedStudios = await api.fetchStudios(city);
  await this.props.addStudios(suggestedStudios);
}

displayStudios = () => {
  const studios = this.props.suggestedStudios.map(studio => {
    console.log(studio)
    return (
      <div key={studio.id} className='suggStudio-cards'>
        <div className='main-info'>
          <div className='img-box'>
            <img className='studio-img' src={studio.image} />
          </div>
          <div className='description-container'>
            <div className='text-container'>
              <h4>{studio.title}</h4>
              <i class="material-icons">favorite</i><b>{studio.rating}</b>
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

studiosInMain = () => {

}


render () {

  if (this.props.suggestedStudios.length) {
    return (
      <div className='studiocards-container'>
        <div className='selected-studio'>
          <ReactGoogleMaps />
          <div className='b-description'>
          </div>
        </div>
        <div className ='studios'>
          {this.displayStudios()}
        </div>
      </div>
    )

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
    selectedLocation: state.location
  });
};

export const mapDispatchToProps = dispatch => ({
  addStudios: (studiosData) => dispatch(addStudios(studiosData)) 
  
});

Studios.propTypes = {
  suggestedStudios: PropTypes.array,
  addStudios: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Studios);