import React, { useEffect, useRef } from 'react'
import MovieList from './MovieList'
import { useState } from 'react'

const Home = () => {

    const [movies, setMovies] = useState([])
    const InputRef = useRef()

    const fetchMovies=async(query)=>{

      const res= await fetch (` http://www.omdbapi.com/?apikey=15def8c4&s=${query}`)
      const data = await res.json()
      console.log(data);
      setMovies(data.Search)
      

    }

    

    useEffect(()=>{
        fetchMovies("Avengers")
    },[])

    const handleSubmit=(e)=>{

      e.preventDefault()
      const query = InputRef.current.value.trim()
      if( query ) fetchMovies(query)

    }

  return (
    <div>
      
	<div className="home">
		<form onSubmit={handleSubmit}>
			<input ref={InputRef} className="searchInput" placeholder="Search for a movie..." />
			<button type="submit">Search 🔎</button>
		</form>

        <MovieList movies={movies}/>
    </div>
    </div>
  )
}

export default Home
