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
    containerElement: <div style={{ height: `400px`, width: `800px`}} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  return (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: props.selectedStudio.coordinates.latitude, lng: props.selectedStudio.coordinates.longitude }}>
      <Marker position={{ lat: props.selectedStudio.coordinates.latitude, lng: props.selectedStudio.coordinates.longitude }} />
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
