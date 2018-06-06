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
      dislikes: 0
    };
  }

  async componentDidMount() {
    const currentUser = await checkUser()
    if (currentUser){
      this.props.addUser(currentUser)
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
    const response = await api.postComment(user, content, type);
  }

  validatePost = () => {
    const user = this.props.user;
    const valid = user === {} || this.state.content.length === 0 ? true : false;
    return valid;
  }
  
  displayPostBox = () => {
    return (
      <div className='post-area'>
        <form className='post-cont'> 
          <label className='label' htmlFor= 'post'>Post here!</label>
          <textarea name='post' className='post-box' value={this.state.content} onChange={(e) => this.getPost(e)}/>
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
  user: PropTypes.object,
  addPost: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);