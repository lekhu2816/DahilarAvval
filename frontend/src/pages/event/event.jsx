import React from 'react'
import './event.css'
import ImgGallery from '../../component/imgGallery/imgGallery'
const Event = () => {
  return (
    <div className='event'>
    <div className="event-title">
        <h1>Popular Events</h1>
    </div>
    <div className="event-desc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos impedit unde molestiae nulla odio, ratione aut cum deserunt dolore pariatur.
    </div>
    <div className="event-gallery">
     <ImgGallery/>
     <ImgGallery/>
     <ImgGallery/>
     <ImgGallery/>
    </div>
    </div>
  )
}

export default Event