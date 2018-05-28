import React, { Component } from 'react';
import  ApiCalls  from '../../../Helper/ApiCalls/ApiCalls';
import { connect } from 'react-redux';
import { addVideos } from '../../../Actions/actions';
import './Videos.css';

export class Videos extends Component {


  componentDidMount() {
    this.fetchVideos();
  }

fetchVideos = async () => {
  let api = new ApiCalls();
  const suggestedVideos = await api.fetchVideos();
  await this.props.addVideos(suggestedVideos);

}

displayVideos = () => {
  const videos = this.props.suggestedVideos.map(video => {
    return (
      <div key={video.id.videoId} className='video-card'>
        <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} />
      </div>
    );
  });

  return videos;
}


render () {

  if (this.props.suggestedVideos.length) {
    return (
      <div className='videos-main'>
        {this.displayVideos()}
      </div>
    )
      
  }
  else {
  return (
    <h1>nadieata</h1>
  );
  }
}
}

export const mapStateToProps = (state) => {
  return ({
    suggestedVideos: state.suggestedVideos
  });
};

export const mapDispatchToProps = dispatch => ({
  addVideos: (VideosData) => dispatch(addVideos(VideosData)) 
  
});
export default connect(mapStateToProps, mapDispatchToProps)(Videos);