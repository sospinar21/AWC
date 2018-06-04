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
      category: 'Post',
      input: '',
      likes: 0,
      dislikes: 0
    };
  }

  async componentDidMount() {
    const currentUser = await checkUser()
    if (currentUser.username){
      this.props.addUser(currentUser)
      console.log('here')
    }
  }


  getPost = (e) => {
    const input = e.target.value;
    this.setState({input});
  }

  sendPost = (e) => {
    e.preventDefault();
    this.props.addPost(this.state);
    this.sendToLambda(); 
    this.setState({category:'Post', input:''});
  }

  listenClick = (e) => {
    const selected = e.target.closest('li').innerText;
    this.setState({
      category : selected
    });
  }

  sendToLambda = async () => {
    const api = new ApiCalls();
    const user = this.props.user;
    const {category, input} = this.state;
    const response = await api.postComment(user, input, category);
    console.log(response)
  }

  validatePost = () => {
    const user = this.props.user;
    return (
      user === {},
      this.state.input.length === 0
    );
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
          <button disabled={this.validatePost()} type='submit' className='submit-post' onClick={(e) => this.sendPost(e)}> Submit </button>
        </form>
      </div>
    );
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
  user: PropTypes.obj,
  addPost: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);