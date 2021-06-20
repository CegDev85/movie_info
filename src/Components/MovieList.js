import React from 'react'  


const MovieList = ({movies}) => {
    
    const movieItems = movies.map((movie, index) => {
        return <li key={index} >{movie.title}</li>
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