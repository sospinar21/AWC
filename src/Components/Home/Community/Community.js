import React, { Component } from 'react';
import './Community.css';

export class Community extends Component {
  constructor() {
    super() 

    this.state = {
      user: 'Stephanie',
      input: '',
      posts: []
    }
  }

  getPost = (e) => {
    const input = e.target.value
    this.setState({input})
  }

  addPost = (e) => {
    e.preventDefault()
    const posts = [this.state.input, ...this.state.posts]
    this.setState({posts, input: ''})
    
  }
  
  displayForum = () => {
    const posts = this.state.posts.map((post, index) => {
      return (
        <div className='post' key={index}>
          <div className='post-img'>
          </div>
          <div className='post-description'>
            <div className='text-description'> 
              <p>“{post}</p>
            </div>
            <div className='likes'>
              <h3>{this.state.user}</h3>
              <i className="material-icons icon">thumb_up_alt</i>
              <i className="material-icons icon">thumb_down_alt</i>
            </div>
          </div>
        </div>
      );
    });
    return posts;
  }
  

  displayPostBox = () => {
    return (
      <div className='post-area'>
        <form className='post-cont'> 
          <label className='label' htmlFor= 'post'>Post here!</label>
          <textarea name='post' className='post-box' value={this.state.input} onChange={(e) => this.getPost(e)}/>
          <div className='post-menu'>
            <button>Make Post </button>
            <button>Upload Photo </button>
            <button>Link Video</button>
          </div> 
          <button className='submit-post' onClick={(e) => this.addPost(e)}> Submit </button>
        </form>
      </div>
    )
  }


  render () {
    return (
      <div className='post-container'>
        {this.displayPostBox()}
        {this.displayForum()}
      </div>
    );
  }
}

// export mapStateToProps = {}

// export mapDispatchToProps = () => ({})

// export connect(mapStateToProps, mapDispatchToProps)(Community)