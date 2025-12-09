'use client'

import axios from 'axios'
import { param } from 'framer-motion/client'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Rating from '@/components/Rating'

function Moviepage() {
    const param = useParams()

    const [movie, setMovie] = useState<any | null>(null)
  useEffect(() => {
    if (!param) return
    const fetchMovie = async () => {
      try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_IMDB_API}/titles/${param.id}`)
    setMovie(response.data)
      } catch (error) {
        
      }
    }

    fetchMovie()
  }, [param])

    if  (!param || !movie) return <div>loading...</div>
  return (
    <div className='mx-auto max-w-[1200px]'>
      
      <div
        className='relative w-full h-[560px] flex flex-col justify-end bg-no-repeat overflow-hidden rounded-md'
      >
        {
          movie.primaryImage && (
            <div className='absolute right-0 left-1/5 top-0 w-full h-full'>
              <div className='absolute inset-x-0 top-0 w-1/4 h-full bg-linear-to-r from-background to-transparent'></div>
              <div className='absolute inset-x-0 bottom-0 w-full h-1/4 bg-linear-to-t from-background to-transparent'></div>
              <Image className='w-4/5' src={movie.primaryImage.url} alt='Movie Banner' width={movie.primaryImage.width} height={movie.primaryImage.height} />
            </div>
          )
        }

        <div className='relative flex flex-col w-2/3 z-10 pb-6'>
        <Rating rating={movie.rating.aggregateRating}/>
          <h1 className='text-5xl font-medium'>{movie.primaryTitle}</h1>
          <p className='mt-4'>{movie.plot}</p>
            
        </div>
      </div>
      
      <div></div>
    </div>
    
  ) 
}

export default Moviepage
