import React, {Component} from 'react';

class ApiCalls extends Component {
  constructor(){
    super();
  }

  fetchEvents = async (city) => {
    const url = `https://api.awc.dance/events?city=${city}`;
    const response = await fetch(url);
    const data= await response.json();
    return data;
  } 

  fetchStudios = (city) => {
    const url = `https://api.awc.dance/?city=${city}`;
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    }).then( response => response.json() )
      .then( data => data );   
  }

  fetchVideos= async () => {
    var url = 'https://api.awc.dance/youtubevideos';
    const response = await fetch(url);
    const data = await response.json();
    return data.items;
  }

  fetchGoogle = async (userInput) => {
    const url = `https://api.awc.dance/autocomplete?input=${userInput}`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }

  fetchSingleStudio = async (studioId) => {
    const url = `https://api.awc.dance/single-studio?id=${studioId}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  postComment = async (user, input, category) => {
    const userEmail = user.username;
    console.log('userr',user)
    console.log(userEmail,input,category)
    const url = `https://api.awc.dance/postcomment?name=${userEmail}&content=${input}&type=${category}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;

  }

  addUserInfo 
}

export default ApiCalls;