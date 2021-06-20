import React from 'react'  


const MovieList = ({movies, onSelectedMovie}) => {
    
    const movieItems = movies.map((movie, index) => {
        return <li  onClick={() => {onSelectedMovie(movie)}} key={index} >{movie.title}</li>
    })



    return (
        <div className="movie-list">
            <ul>
                {movieItems}
            </ul>


        </div>
    )
}







export default MovieList;