import React, { Component } from 'react'
import './Community.css'

export class Community extends Component {
  
  displayForum = () => {
    return (
      <div className='post'>
        <div className='post-img'>
          <img href='https://img.grouponcdn.com/deal/uertuP3ir2AGAqWFpKGp/jq-2048x1228/v1/c700x420.jpg'/>
        </div>
        <div className='post-description'>
          <div className='text-description'> 
            <p>Belly dance is primarily a torso-driven dance, with an emphasis on articulations of the hips.[9] Unlike many Western dance forms, the focus of the dance is on isolations of the torso muscles, rather than on movements of the limbs through space. Although some of these isolations appear similar to the isolations used in jazz ballet, they are sometimes driven differently and have a different feeling or emphasis.</p>
          </div>
          <div className='likes'>
            <i class="material-icons">thumb_up_alt</i>
            <i class="material-icons">thumb_down_alt</i>
          </div>
        </div>
      </div>
    )
  }


  render () {
    return(
      <div className='post-container'>
        {this.displayForum()}
      </div>
    )
  }
}

// export mapStateToProps = {}

// export mapDispatchToProps = () => ({})

// export connect(mapStateToProps, mapDispatchToProps)(Community)