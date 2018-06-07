import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ApiCalls from '../../../Helper/ApiCalls/ApiCalls';
import './Post.css';
import { checkUser
} from '../../../Helper/Users/Users';
import { addUser } from '../../../Actions/actions';

export class Post extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      type: 'Post',
      content: '',
      likes: 0,
      dislikes: 0,
      picture: false,
      video: false,
      files: null,
      imagePreviewUrl: null,
      videoUrl: null
    };
  }

  async componentDidMount() {
    const currentUser = await checkUser();
    if (currentUser){
      this.props.addUser(currentUser);
    }
  }

  getPost = (e) => {
    const content = e.target.value;
    this.setState({content});
  }

  sendPost = (e) => {
    e.preventDefault();
    this.props.addPost(this.state);
    this.sendToLambda(); 
    this.setState({type:'Post', content:''});
  }

  sendToLambda = async () => {
    const api = new ApiCalls();
    const user = this.props.user;
    const {type, content} = this.state;
    await api.postComment(user, content, type);
  }

  validatePost = () => {
    const user = this.props.user;
    const valid = !user.username || this.state.content.length === 0 ? true : false;
    return valid;
  }
  
  displayPostBox = () => {
    const user = this.props.user;
    const text = !user.username ? 'LogIn to Post!' : 'Submit';
    // const activeIcon = !user.username ? 'inactiveIcon' : 'activeIcon'
    return (
      <div className='post-area'>
        <form className='post-cont'> 
          <textarea placeholder='Post here!' name='post' className='post-box' value={this.state.content} onChange={(e) => this.getPost(e)}/>
          <div className='pic-vid'>
            {/* {this.setInpuBox()} */}
            {/* <i className={`material-icons ${activeIcon}`} onClick={this.uploadVideo}>videocam</i> */}
            {/* <i className={`material-icons cam ${activeIcon}`} onClick={this.uploadPicture}>photo_camera</i> */}
          </div>
          <button disabled={this.validatePost()} type='submit' className='submit-post' onClick={(e) => this.sendPost(e)}>{text}</button>
        </form>
      </div>
    );
  }

  // uploadPicture = () => {
  //   this.setState({picture: true, video: false})
  // }

  // uploadVideo= () => {
  //   this.setState({picture: false, video: true})
  // }

  // setInpuBox = () => {
    // if (this.state.picture === true){
    // return <input className='photoInput' onChange={(e) => this.loadImages(e)} placeholder='upload pics' type='file' />
    // } if (this.state.video === true)
    //   return <input className='videoInput' value={this.state.videoUrl}  onChange={(e) => this.showVideo(e)} placeholder='enter url' type='url' />
  // }

  // showVideo = (e) => {
  //   this.setState({
  //     videoUrl: e.target.value
  //   })
  // }

  loadImages = (e) => {
    e.preventDefault()
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
  }


  render () {

    return (
      <div className='form-container'>
        {this.displayPostBox()}
      </div>
    );
  }
}


export const mapStateToProps = (state) => {
  return ({
    user: state.user
  });
};

export const mapDispatchToProps = dispatch => ({
  addUser: (user) => dispatch(addUser(user))
});

Post.propTypes = {
  user: PropTypes.object,
  addPost: PropTypes.func,
  addUser: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);