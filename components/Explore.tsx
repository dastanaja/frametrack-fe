'use client'

import React, { useEffect, useState } from 'react'

import {motion} from 'framer-motion'
import Moviecard, { MovieCardSkeleton } from './Moviecard'
import axios from 'axios'

function Explore() {
  const [movies, setMovies]=useState<any[]>([])
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_IMDB_API}/titles`)
        setMovies(response.data.titles)
      } catch (error) {
        
      }
    }

    fetchMovies()
  }, [])
    
  return (
    <div>
        <motion.h1 
        className='mt-14 mb-18 font-medium text-center text-6xl' 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}>
        Explore Movie & TV Shows</motion.h1>
        
        {
        movies.length ? (
          <div className='grid grid-cols-4 gap-4'>
            {movies.map((movie, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
              >
                <Moviecard 
                  id={movie.id}
                  imageUrl={movie.primaryImage.url} 
                  title={movie.primaryTitle}
                  startYear={movie.startYear}
                  plot={movie.plot}
                />
              </motion.div>
            )) }    
          </div>
        ) : (
              <div className='grid grid-cols-4 gap-4'>
                {
                  Array.from({ length: 8 }).map((_, i) => (
                    <MovieCardSkeleton key={i} />
                  ))
                }
              </div>
            )
      }
    </div>
  )
}

export default Explore
