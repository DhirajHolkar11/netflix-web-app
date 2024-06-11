const key = 'a53e01bf99f57e6175abac1629a43680'





const requests = {

    requestTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${key}&language=en-US`,
    requestNetflixOriginals:`https://api.themoviedb.org/3/discover/tv?api_key=${key}&with_networks=213`,
    requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&langusge=en-US`,
    requestActionMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=28`,
    requestComedyMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=35`,
    requestHorrorMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27`,
    requestRomanceMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=10749`,
    requestDocumentaries:`https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=99`,
    
    
       };

       export default requests;