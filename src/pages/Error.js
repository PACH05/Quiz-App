import React from 'react'
import Image from '../components/error.jpeg'

const Error = () => {
  return (
    <div>
        <div >
        <img src={Image} className="object-cover w-full h-fit" alt="Error Page Image" />
        </div>
    </div>
  )
}

export default Error