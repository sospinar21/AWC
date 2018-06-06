import React, { Component } from 'react';
import './Community.css';
import  Post  from '../Post/Post';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ApiCalls from '../../../Helper/ApiCalls/ApiCalls';
import '../../../index.css'



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
    const user = this.props.user.username;
    if (this.state.posts.length){
      const posts = this.state.posts.map((post, index) => {
        return (     
          <div className="post post-box" key={user + index}>
            <div className="poster">
              <i className="flagico un">
              </i>
              <b>{post.user}</b>
              <br/>
            </div>
            <div className ="content">
              {/* <img src="bdsample.jpg"/> */}
              <s>{post.content}</s>
            </div>
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

export const mapDispatchToProps = dispatch => ({
});

Community.propTypes = {
  user: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Community);