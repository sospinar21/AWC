import React, { Component } from 'react';
import './Community.css';
import  Post  from '../Post/Post';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export class Community extends Component {
  constructor() {
    super(); 
    this.state = {
      posts: []
    };
  }

  addPost = (post) => {
    const posts = [post, ...this.state.posts];
    this.setState({posts});
  }
  
  displayForum = () => {
    const user = this.props.user.username;
    if (this.state.posts.length){
      const posts = this.state.posts.map((post, index) => {
        return (
          <div className='post' key={post.user + index}>
            <div className='post-img'>
            </div>
            <div className='post-description'>
              <div className='text-description'> 
                <p>{post.input}</p>
              </div>
              <div className='likes'>
                <h3>category: {post.category}</h3>
                <h3>@ {user}</h3>
                {/* <p>{post.likes}</p><i className="material-icons icon" onClick={(e)=> this.upvote(e, post)}>thumb_up_alt</i>
                <p>{post.dislikes}</p><i className="material-icons icon" onClick={(e)=> this.downVote(e, post)}>thumb_down_alt</i> */}
              </div>
            </div>
          </div>
        );
      });
      return posts;
    }
  }

  render () {
    return (
      <div className='post-container'>
        <Post addPost = {this.addPost}/>
        {this.displayForum()}
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
});

Community.propTypes = {
  user: PropTypes.obj
};

export default connect(mapStateToProps, mapDispatchToProps)(Community);