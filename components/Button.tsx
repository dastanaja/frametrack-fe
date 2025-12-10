import React from 'react'

interface ButtonProps{
    label: string
    className?: string
    onClick?: () => void
}

function Button(props: ButtonProps) {
    const { label, className, onClick } = props
  return (
    <button className={`min-w-8 h-12 rounded-lg px-3 my-3 cursor-pointer font-medium hover:opacity-60 ${className}`} onClick={onClick}>{label}</button>
  )
}

export default Button
