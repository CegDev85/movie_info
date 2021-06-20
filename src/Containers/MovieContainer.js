import React, { useEffect, useState } from 'react' 
import MovieList from '../Components/MovieList'
import MovieDetail from '../Components/MovieDetail';
import MovieSelect from '../Components/MovieSelect';


const MovieContainer = () => {

    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);


    useEffect(() => {
        getMovies()
    },[])

    const getMovies = () => {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(data => setMovies(data))
    }

    const handleSelectedMovie = (movie) => {
        setSelectedMovie(movie)
    }


    return (
        <div className="movie-container">
            <h1>Studio Ghibli API</h1>
            {/* <MovieList movies={movies} onSelectedMovie={handleSelectedMovie} /> */}
            <MovieSelect movies={movies} movieSelected={handleSelectedMovie}/>
            <MovieDetail movie={selectedMovie}/>
        </div>
    )
    
    }




export default MovieContainer;
