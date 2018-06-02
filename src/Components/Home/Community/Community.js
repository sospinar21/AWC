import React, { Component } from 'react';
import './Community.css';
import { Post } from '../Post/Post';

export class Community extends Component {
  constructor() {
    super() 
    this.state = {
      posts: []
    }
  }

  addPost = (post) => {
    const posts = [post, ...this.state.posts]
    this.setState({posts})
  }
  
  displayForum = () => {
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
                <h3>@ {post.user}</h3>
                <p>{post.likes}</p><i className="material-icons icon" onClick={(e)=> this.upvote(e, post)}>thumb_up_alt</i>
                <p>{post.dislikes}</p><i className="material-icons icon" onClick={(e)=> this.downVote(e, post)}>thumb_down_alt</i>
              </div>
            </div>
          </div>
        );
      });
      return posts;
    }
  }

  upvote = (e, post) => {
    post.likes = post.likes + 1
  }

  downVote = (e, post) => {
    post.dislikes = post.dislikes + 1
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

// export mapStateToProps = {}

// export mapDispatchToProps = () => ({})

// export connect(mapStateToProps, mapDispatchToProps)(Community)