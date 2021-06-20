import React from 'react' 
import MovieList from './MovieList';


const MovieDetail = ({movie}) => {
    
    if(!movie){
        // return <p>Select a movie</p>
        return <p>Select a Movie</p>
    }



    return(
        <div className="movie-detail">
            <h2>{movie.title}</h2>
            <h3>{movie.original_title}</h3>

        </div>
    )

}



export default MovieDetail;