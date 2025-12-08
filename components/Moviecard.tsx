import React from 'react'

interface MovieCardProps {
  imageUrl: string
  title: string
  startYear: string
  plot: string
}

function MovieCard(props: MovieCardProps) {
  const { imageUrl, title, startYear, plot } = props

  return (
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
  )
}

export default MovieCard