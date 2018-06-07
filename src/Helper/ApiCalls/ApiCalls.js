
class ApiCalls {

  fetchEvents = async (city) => {
    try {
      const url = `https://api.awc.dance/events?city=${city}`;
      const response = await fetch(url);
      const data= await response.json();
      return data; 
    } catch (error) {
      throw new Error(error.message);
    }
  } 

  fetchStudios = (city) => {
    try {
      const url = `https://api.awc.dance/?city=${city}`;
      return fetch(url, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json'
        }
      }).then( response => response.json() )
        .then( data => data )
      ;
    } catch (error) {
      throw new Error(error.message);
    }      
  }

  fetchVideos= async () => {
    try {
      var url = 'https://api.awc.dance/youtubevideos';
      const response = await fetch(url);
      const data = await response.json();
      return data.items;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  fetchGoogle = async (userInput) => {
    try {
      const url = `https://api.awc.dance/autocomplete?input=${userInput}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  fetchSingleStudio = async (studioId) => {
    try {
      const url = `https://api.awc.dance/single-studio?id=${studioId}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  postComment = async (user, input, category) => {
    const userEmail = user.username;
    const url = `https://api.awc.dance/postcomment?name=${userEmail}&content=${input}&type=${category}`;
    const response = await fetch(url);
    const data = await response.json();
    return await data;
  }

  getPosts = async () => {
    try {
      const url = 'https://api.awc.dance/getposts';
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }


}

export default ApiCalls;