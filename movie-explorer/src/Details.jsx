import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Details = () => {

    const {id} = useParams()
    const [movie , setMovie] = useState(null)

    useEffect(()=>{
      const fetchMovie= async ()=>{

        const res = await fetch (` http://www.omdbapi.com/?apikey=15def8c4&i=${id}`)
        const data = await res.json()
        setMovie(data)

      }

      fetchMovie()
      


    },[id])

    if (!movie) {
  return <h2>Loading...</h2>;
}
    
  return (
    <div>
      
     <div className="movie-detail">
		<h2>{movie.Title}</h2>
		<img alt={movie.Title} src={movie.Poster} />
		<p><strong>Genre:</strong> {movie.Genre}</p>
		<p><strong>Released:</strong> {movie.Released}</p>
		<p><strong>Plot:</strong> {movie.Plot}</p>
	</div>

    </div>
  )
}

export default Details
