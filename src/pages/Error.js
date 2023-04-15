import React from 'react'
import Image from '../components/error.jpeg'
import NavBar from '../components/NavBar'

//Error page with an image
const Error = () => {
  return (
    <div>
        <div >
          <NavBar />
        <img src={Image} className="object-cover w-full h-fit" alt="Error Page" />
        </div>
    </div>
  )
}

export default Error