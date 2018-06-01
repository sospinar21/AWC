import _ from "lodash";
import React from "react";
import { compose, withProps } from "recompose";
import { key } from '../../../apikey';
import { connect } from 'react-redux';
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
    containerElement: <div style={{ height: `400px`, width: `800px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  const longitude = props.selectedStudio.id ? props.selectedStudio.coordinates.longitude : 40.730610;
  const latitude = props.selectedStudio.id ? props.selectedStudio.coordinates.latitude : -73.935242;
  console.log(longitude,latitude)  
  return (
    <GoogleMap defaultZoom={15} defaultCenter={{ lat: latitude, lng: longitude }}>
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

export default connect(mapStateToProps)(MyMapComponent);
