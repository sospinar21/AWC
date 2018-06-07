import React from "react";
import './Map.css';
import { compose, withProps } from "recompose";
import { key } from '../../../apikey';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
    `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%`, width: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  const longitude = props.selectedStudio.id ? props.selectedStudio.coordinates.longitude : 40.730610;
  const latitude = props.selectedStudio.id ? props.selectedStudio.coordinates.latitude : -73.935242;

  const defaultZoom = props.selectedStudio.id ? 12 : 2

  return (
    <GoogleMap defaultZoom={defaultZoom} defaultCenter={{ lat: latitude, lng: longitude }}>
      <Marker position={{ lat: latitude, lng: longitude }} />
    </GoogleMap>
  );
}
);

export const mapStateToProps = (state) => {
  return ({
    selectedStudio: state.selectedStudio
  });
};

Map.propTypes = {
  selectedStudio: PropTypes.obj
};

export default connect(mapStateToProps)(MyMapComponent);
