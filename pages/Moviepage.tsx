'use client'

import axios from 'axios'
import { param } from 'framer-motion/client'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Rating from '@/components/Rating'
import { motion } from 'framer-motion'
import Button from '@/components/Button'

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

    if (!param || !movie) return (
    <div className='relative flex flex-col justify-end w-full h-[560px] rounded-md overflow-hidden'>
      <div className='absolute right-0 left-1/5 top-0 w-full h-full'>
        <div className='absolute inset-x-0 top-0 z-10 w-1/4 h-full bg-linear-to-r from-background to-transparent'></div>
        <div className='absolute inset-x-0 bottom-0 z-10 w-full h-1/4 bg-linear-to-t from-background to-transparent'></div>
        <div className='w-4/5 h-full bg-gray-800 animate-pulse'></div>
      </div>

      <div className='relative flex flex-col gap-4 w-2/3 z-10 pb-6'>
        <div className='w-[540px] h-12 bg-gray-800 rounded-md animate-pulse'></div>
        <div className='w-[640px] h-5 bg-gray-800 rounded-md animate-pulse'></div>
        <div className='w-[520px] h-5 bg-gray-800 rounded-md animate-pulse'></div>
        <div className='w-[320px] h-5 bg-gray-800 rounded-md animate-pulse'></div>
        <div className='w-[320px] h-5 bg-gray-800 rounded-md animate-pulse'></div>
        <div className='w-[320px] h-5 bg-gray-800 rounded-md animate-pulse'></div>
      </div>
    </div>
  )
  return (
    <div className='mx-auto max-w-[1200px]'>
      
      <div
        className='relative w-full h-[560px] flex flex-col justify-end bg-no-repeat overflow-hidden rounded-md'
      >
        {
          movie.primaryImage && (
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.5, ease:'easeOut'}}
            className='absolute right-0 left-1/5 top-0 w-full h-full'>
              <div className='absolute inset-x-0 top-0 w-1/4 h-full bg-linear-to-r from-background to-transparent'></div>
              <div className='absolute inset-x-0 bottom-0 w-full h-1/4 bg-linear-to-t from-background to-transparent'></div>
              <Image className='w-4/5' src={movie.primaryImage.url} alt='Movie Banner' width={movie.primaryImage.width} height={movie.primaryImage.height} />
            </motion.div>
          )
        }

        <div className='relative flex flex-col w-2/3 z-10 pb-6'>
        <motion.div initial={{opacity:0, translateY:20}}
            animate={{opacity:1, translateY:0}}
            transition={{duration:0.5, ease:'easeOut', delay:0.1}}><Rating rating={movie.rating.aggregateRating}/></motion.div>
          <motion.h1 
          initial={{opacity:0, translateY:20}}
            animate={{opacity:1, translateY:0}}
            transition={{duration:0.5, ease:'easeOut', delay:0.2}}
          className='text-5xl font-medium'>{movie.primaryTitle}</motion.h1>
          <div className='flex flex-col gap-1 mt-4'>
            <motion.p
            initial={{opacity:0, translateY:20}}
            animate={{opacity:1, translateY:0}}
            transition={{duration:0.5, ease:'easeOut', delay:0.3}}>

              Directors:
              {
                movie.directors.map((director: any, i: number) => (
                  <span key={i}>{' '}{director.displayName}{i !== movie.directors.length - 1 ? ',' : ''}</span>
                ))
              } 
            </motion.p>
            <motion.p
            initial={{opacity:0, translateY:20}}
            animate={{opacity:1, translateY:0}}
            transition={{duration:0.5, ease:'easeOut', delay:0.4}}>
              Writers:
              {
                movie.writers.map((writer: any, i: number) => (
                  <span key={i}>{' '}{writer.displayName}{i !== movie.writers.length - 1 ? ',' : ''}</span>
                ))
              } 
            </motion.p>
            <motion.p
            initial={{opacity:0, translateY:20}}
            animate={{opacity:1, translateY:0}}
            transition={{duration:0.5, ease:'easeOut', delay:0.5}}>
              Stars:
              {
                movie.stars.map((star: any, i: number) => (
                  <span key={i}>{' '}{star.displayName}{i !== movie.stars.length - 1 ? ',' : ''}</span>
                ))
              } 
            </motion.p>
          </div>

          <motion.p initial={{opacity:0, translateY:20}}
            animate={{opacity:1, translateY:0}}
            transition={{duration:0.5, ease:'easeOut', delay:0.6}} className='mt-4'>{movie.plot}</motion.p>
            
          <div className="flex gap-2">
            <Button className ="bg-[#222931]" 
            label ="Add To Diary" />
            <Button className ="bg-[#222931]" 
            label ="Add To Watchlist" />
          </div>
        </div>
      </div>
      
      <div></div>
    </div>
    
  ) 
}

export default Moviepage
