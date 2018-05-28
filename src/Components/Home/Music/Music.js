import React, { Component } from 'react';
import  ApiCalls  from '../../../Helper/ApiCalls/ApiCalls';
import { connect } from 'react-redux';
import './Music.css';

export class Music extends Component {


//   componentDidMount() {
//     this.fetchMusic();
//   }

// fetchMusic = async () => {
//   let api = new ApiCalls();
//   const suggestedMusic = await api.fetchMusic();
//   await this.props.addMusic(suggestedMusic);

// }

// displayMusic = () => {
//   const Music = this.props.suggestedMusic.map(video => {
//     return (
//       <div key={video.id.videoId} className=''>
//         <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} />
//       </div>
//     );
//   });

//   return Music;
// }


render () {

    return (
      <div className='music-box'>
        nadieata
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return ({
  });
};

export const mapDispatchToProps = dispatch => ({
  
});
export default connect(mapStateToProps, mapDispatchToProps)(Music);