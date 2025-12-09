import Link from 'next/link'
import React from 'react'

interface MovieCardProps {
  imageUrl: string
  title: string
  startYear: string
  plot: string
  id : string
}

function MovieCard(props: MovieCardProps) {
  const { id, imageUrl, title, startYear, plot } = props

  return (
    <Link href={`/movie/${id}`}>
    <div 
      className='relative flex flex-col justify-end w-full aspect-3/4 overflow-hidden rounded-md group cursor-pointer'
    >
      <div
        className='w-full h-full bg-cover bg-top group-hover:scale-110 transition-transform duration-300 ease-out'
        style={{
          backgroundImage: `url('${imageUrl}')`
        }}
      ></div>

      <div className='absolute bottom-0 inset-x-0 bg-linear-to-b from-transparent to-black p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out'>
        <span className='text-lg font-bold'>{title} ({startYear})</span>
        <p className='line-clamp-2'>{plot}</p>
      </div>
    </div>
    </Link>
  )
}
export function MovieCardSkeleton() {
  return (
    <div 
      className='w-full aspect-3/4 rounded-md bg-gray-800 animate-pulse'
    ></div>
  )
}
export default MovieCard