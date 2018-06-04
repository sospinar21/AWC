import React, { Component } from 'react';
import { connect } from 'react-redux';
import ApiCalls from '../../../Helper/ApiCalls/ApiCalls'
import './Post.css';

export class Post extends Component {
  constructor(props) {
    super(props) 

    this.state = {
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
    this.sendToLambda() 
    this.setState({category:'', input:''})
  }

  listenClick = (e) => {
    const selected = e.target.closest('li').innerText;
    this.setState({
      category : selected
    })
  }

  sendToLambda = async () => {
    const api = new ApiCalls()
    const {token, user} = this.props.user
    const {category, input} = this.state
    const response = await api.postComment(token, user, input, category)
    console.log(response)
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


export const mapStateToProps = (state) => {
  return ({
    user: state.user
  });
};

export const mapDispatchToProps = dispatch => ({
});

Post.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Post);