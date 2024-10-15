import React from 'react'
import './nature.css'
import ImgGallery from '../../component/imgGallery/imgGallery'
const Nature = () => {
  return (
    <div className='nature'>
          <div className="nature-title">
        <h1>Natural Treasures</h1>
    </div>
    <div className="nature-desc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos impedit unde molestiae nulla odio, ratione aut cum deserunt dolore pariatur.
    </div>
    <div className="nature-gallery">
     <ImgGallery/>
     <ImgGallery/>
     <ImgGallery/>
    </div>
    </div>
  )
}

export default Nature