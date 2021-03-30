
async function fetchGenreIdList(array) {
    try {
      const url =
        "https://api.themoviedb.org/3/genre/movie/list?api_key=ed4770d472da6341d2e53ccb9e288320";
  
      const response = await fetch(url);
      const list = await response.json();
      const { genres } = list;
      console.log(genres);
      const getGenre = await genres.map((obj) => genreConverId(obj) ) 
      console.log(getGenre);
     
      return getGenre;
    } catch (error) {
      console.log(error);
    }
  }
  
  export default fetchGenreIdList; 
  
  function genreConverId(obj) {
      obj.id = 
    
  }