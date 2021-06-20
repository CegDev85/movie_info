import React, { useEffect, useState } from 'react' 
import MovieList from '../Components/MovieList'


const MovieContainer = () => {

    const [movies, setMovies] = useState([])


    useEffect(() => {
        getMovies()
    },[])

    const getMovies = () => {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(data => setMovies(data))
    }



    return (
        <div className="movie-container">
            <h1>MovieContainer</h1>
            <MovieList movies={movies}/>
        </div>
    )
}




export default MovieContainer;
