import React from 'react'  


const MovieSelect = ({movies, movieSelected}) => {

    const handleChange = function(event) {
        const chosenMovie = movies[event.target.value];
        movieSelected(chosenMovie);
    }

    const movieOptions = movies.map((movie, index) => {
        return <option value={index} key={index}>{movie.title}</option>
    })



    return(
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose a Movie</option>
            {movieOptions}
        </select>

    )
}



export default MovieSelect;