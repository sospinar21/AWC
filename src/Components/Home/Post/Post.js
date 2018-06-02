import React, { Component } from 'react';
import './Post.css';
import { cogToken } from '../../../Helper/Users/Users';

export class Post extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      token: '',
      user: 'Stephanie',
      category: '',
      input: '',
      likes: 0,
      dislikes: 0
    }
  }

  getPost = (e) => {
    const input = e.target.value
    this.setState({input})
  }

  sendPost = (e) => {
    e.preventDefault()
    this.props.addPost(this.state) 
    this.setState({category:'', input:''})
  }

  listenClick = (e) => {
    const selected = e.target.closest('li').innerText;
    this.setState({
      category : selected
    })
  }
  
  displayPostBox = () => {
    return (
      <div className='post-area'>
        <form className='post-cont'> 
          <label className='label' htmlFor= 'post'>Post here!</label>
          <textarea name='post' className='post-box' value={this.state.input} onChange={(e) => this.getPost(e)}/>
          <div className='post-menu' onClick={(e) => this.listenClick(e)}>
            <li>#Image</li>
            <li>#Video</li>
            <li>#Network </li>
            <li>#Pro</li>
            <li>#Entertainment</li>
          </div> 
          <button type='submit' className='submit-post' onClick={(e) => this.sendPost(e)}> Submit </button>
        </form>
      </div>
    )
  }


  render () {
    return (
      <div className='form-container'>
        {this.displayPostBox()}
      </div>
    );
  }
}

// export mapStateToProps = {}

// export mapDispatchToProps = () => ({})

// export connect(mapStateToProps, mapDispatchToProps)(Post)