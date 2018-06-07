import React, { Component } from 'react';
import './Community.css';
import  Post  from '../Post/Post';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ApiCalls from '../../../Helper/ApiCalls/ApiCalls';
import '../../../index.css';



export class Community extends Component {
  constructor() {
    super(); 
    this.state = {
      posts: []
    };
  }

  async componentDidMount() {
    const api = new ApiCalls();
    const posts = await api.getPosts();

    this.setState({posts});
  }

  addPost = (post) => {
    const posts = [post, ...this.state.posts];
    this.setState({posts});
  }
  
  displayForum = () => {

    if (this.state.posts.length){
      const posts = this.state.posts.map((post, index) => {
        // let imagePreview = null;
        // if (post.imagePreviewUrl) {
        //   imagePreview= (<img className='pic-preview' src={post.imagePreviewUrl} />);
        // }

        const user = !post.user ? this.props.user.username : post.user;

        return (     
          <div className="post post-box" key={'post' + index}>
            <div className="poster">
              <i className="flagico us"></i>
              <b>{user}</b>
              <br/>
            </div>
            <div className ="content">
              <s>{post.content}</s>
            </div>
            {/* {imagePreview}  */}
          </div> 
        );
      });
      return posts;
    }
  }

  render () {
    return (
      <div>
        <Post addPost = {this.addPost}/>
        <div className='post-container'>
          {this.displayForum()}
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return ({
    user: state.user
  });
};

Community.propTypes = {
  user: PropTypes.object
};

export default connect(mapStateToProps)(Community);