import React, { Component } from 'react';
import  ApiCalls  from '../../../Helper/ApiCalls/ApiCalls';
import { connect } from 'react-redux';
import { addVideos } from '../../../Actions/actions';
import './Videos.css';
import PropTypes from 'prop-types';

export class Videos extends Component {
  constructor() {
    super() 

    this.state = {
      selectedVideo: '',
      selectedTitle:''
    }
  }

  componentDidMount() {
    this.fetchVideos();
  }

fetchVideos = async () => {
  let api = new ApiCalls();
  const suggestedVideos = await api.fetchVideos();
  await this.props.addVideos(suggestedVideos);

}

displaySelectedVideo = (id, title) => {
  console.log(title)
 if (id){
  this.setState({
    selectedVideo: id,
    selectedTitle: title
  })
 }
}

displayVideos = () => {
  const videos = this.props.suggestedVideos.map(video => {
    const snippet = video.snippet.thumbnails.medium.url;
    const title = video.snippet.title;
    const videoId = video.id.videoId;
    return (
      <div onClick={() => this.displaySelectedVideo(videoId, title)} key={videoId} className='video-card'>
        <img src={snippet} />
      </div>
    );
  });

  return videos;
}


render () {
  const selectedVideo = this.state.selectedVideo.length ? this.state.selectedVideo : 'Kl5B6MBAntI'
  const selectedTitle = this.state.selectedTitle.length ? this.state.selectedTitle: 'ED SHEERAN - Shape Of You | Kyle Hanagami Choreography'

  if (this.props.suggestedVideos.length) {
    return (
      <div className='videos-main'>
        <div className='selectedVideo'> 
          <div key={selectedVideo} className='video-display'>
            <iframe src={`https://www.youtube.com/embed/${selectedVideo}`} />
          </div>
          <div className='video-description'>
            <h3>{selectedTitle}</h3>
            <div className='icons'>
              <i className="material-icons icon-vid">thumb_up_alt</i> 
              <p>0</p>
              <i className="material-icons icon-vid">thumb_down_alt</i> 
              <p>0</p>
            </div>
          </div>
        </div>
        <div className='videosidebar'>
          {this.displayVideos()}
        </div>
      </div>
    );
      
  } else {
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