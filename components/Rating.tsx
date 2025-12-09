import React from 'react'

import { Icon } from '@iconify/react'

interface RatingProps {
  rating: number;
}

function Rating(props: RatingProps) {
  const { rating } = props;
  return (
    <div className='flex items-center'>
        <Icon icon='material-symbols:star-rounded' className={`size-7 ${rating >= 0 ? 'text-amber-400' : ''}`} />
        <Icon icon='material-symbols:star-rounded' className={`size-7 ${rating >= 2 ? 'text-amber-400' : ''}`} />
        <Icon icon='material-symbols:star-rounded' className={`size-7 ${rating >= 4 ? 'text-amber-400' : ''}`} />
        <Icon icon='material-symbols:star-rounded' className={`size-7 ${rating >= 6 ? 'text-amber-400' : ''}`} />
        <Icon icon='material-symbols:star-rounded' className={`size-7 ${rating >= 8 ? 'text-amber-400' : ''}`} />
        <span className='ml-2'>{rating}</span>
    </div>
  )
}

export default Rating
