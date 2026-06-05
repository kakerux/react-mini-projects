import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies}) => {

  if(movies===0)
    return <p>"Not Available"</p>
  return (
    <div>


        

        <div className="movie-list">
			
      {movies.map((movie)=>(
        
          
            <MovieCard key={(movie.imdbID)} movie={movie} />
         
      ))}
            

		</div>
      



    </div>
  )
}

export default MovieList
