import React, { Component } from 'react';
import './Community.css';
import  Post  from '../Post/Post';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ApiCalls from '../../../Helper/ApiCalls/ApiCalls';



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
        console.log(post);
        return (
          <div className="post" key={user + index}>
            <div className="poster">
              <i className="flagico">
                <svg xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-co" viewbox="0 0 512 512">
                  <g fillRule="evenodd" strokeWidth="1pt">
                    <path fill="#ffe800" d="M0 0h512v512H0z"/>
                    <path fill="#00148e" d="M0 256h512v256H0z"/>
                    <path fill="#da0010" d="M0 384h512v128H0z"/>
                  </g>
                </svg>
              </i>
              <b>{post.user}</b>
              <br/>
              <b>category: {post.type}</b>
            </div>
            <div className="content">{post.content}
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