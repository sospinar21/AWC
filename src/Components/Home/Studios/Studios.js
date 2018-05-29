import React, { Component } from 'react';
import  ApiCalls  from '../../../Helper/ApiCalls/ApiCalls';
import { connect } from 'react-redux';
import { addStudios } from '../../../Actions/actions';
import './Studios.css';

export class Studios extends Component {


  componentDidMount() {
    this.fetchStudios();
  }

fetchStudios = async () => {
  let api = new ApiCalls();
  const suggestedStudios = await api.fetchStudios();
  await this.props.addStudios(suggestedStudios);

}

displayStudios = () => {
  const studios = this.props.suggestedStudios.map(studio => {
    return (
      <div key={studio.id} className='suggEvent-cards'>
        <img src={studio.image} />
        <div className='text-container'>
          <h4>{studio.title}</h4>
          <b>{studio.reviews}</b>
          <div className='description'>
            <p>{studio.location.address1}</p>
            <p>{studio.phone}</p>              
          </div>
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
      <div className='cards-container'>
        {this.displayStudios()}
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
    suggestedStudios: state.suggestedStudios
  });
};

export const mapDispatchToProps = dispatch => ({
  addStudios: (studiosData) => dispatch(addStudios(studiosData)) 
  
});
export default connect(mapStateToProps, mapDispatchToProps)(Studios);