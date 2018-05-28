import React, { Component } from 'react'
import './Community.css'

export class Community extends Component {
  
  displayForum = () => {
    const arrp = [1,2,3,4,5,6]
    const posts = arrp.map((post, index) => {
      return (
        <div className='post' key={index}>
          <div className='post-img'>
          </div>
          <div className='post-description'>
            <div className='text-description'> 
              <p>Belly dance is primarily a torso-driven dance, with an emphasis on articulations of the hips.[9] Unlike many Western dance forms, the focus of the dance is on isolations of the torso muscles, rather than on movements of the limbs through space. Although some of these isolations appear similar to the isolations used in jazz ballet, they are sometimes driven differently and have a different feeling or emphasis.</p>
            </div>
            <div className='likes'>
              <i className="material-icons icon">thumb_up_alt</i>
              <i className="material-icons icon">thumb_down_alt</i>
            </div>
          </div>
        </div>
      )
    })
    return posts
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