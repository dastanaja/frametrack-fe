'use client'

import MovieCard from '@/components/Moviecard'
import Moviecard, { MovieCardSkeleton } from '@/components/Moviecard'
import axios from 'axios'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

function Watchlist() {
  const [watchlist, setWatchlist] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const fetchWatchlist = async () => {
      setIsLoading(true)
      try {
        const existingWatchlist: string | null = window.localStorage.getItem('watchlist');
        let titleIds = existingWatchlist ? JSON.parse(existingWatchlist) : [];

        titleIds.map(async (titleId: string) => {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_IMDB_API}/titles/${titleId}`)
          setWatchlist((prev) => [...prev, response.data])
        })
      } catch (error) {
        
      } finally {
        setIsLoading(false)
      }
    }

    fetchWatchlist()
  }, [])
  return (
    <div className='max-w-[1200px] mx-auto pb-40'>
      <motion.h1 
        className='mt-14 mb-18 font-medium text-left text-6xl' 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}>
        Watch List</motion.h1>
        {
        !isLoading ? 
          watchlist.length ? 
          (
            <div className='grid grid-cols-4 gap-4 mt-12'>
              {watchlist.map((movie, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
                >
                  <MovieCard 
                    id={movie.id}
                    imageUrl={movie.primaryImage.url} 
                    title={movie.primaryTitle}
                    startYear={movie.startYear}
                    plot={movie.plot}
                  />
                </motion.div>
              )) }    
            </div>
          ) : 
          (
            <div>
              <p className='text-left text-gray-500'>Your watchlist is empty. Start adding some movies!</p>   
            </div>
          ) : 
        (
          <div className='grid grid-cols-4 gap-4 mt-12'>
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

export default Watchlist