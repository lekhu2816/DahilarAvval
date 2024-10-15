import React from 'react'
import './imgGallery.css'
import yagh from '../../assets/yagh.jpeg';

const ImgGallery = () => {
  return (
    <div className='imgGallery'>
        <div className="imgGallery-title">
            <h1>Yagh Samaroh</h1>
        </div>
        <div className="imgGallery-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod assumenda, ipsa laboriosam provident debitis illo atque quasi. Facilis, magni reiciendis, unde quia ullam laborum, at sequi modi iure dignissimos voluptatem?
        </div>
        <div className="imgGallery-images">
          <img src={yagh} alt="" />
          <img src={yagh} alt="" />
          <img src={yagh} alt="" />
          <img src={yagh} alt="" />
          <img src={yagh} alt="" />
          <img src={yagh} alt="" />
          <img src={yagh} alt="" />
          <img src={yagh} alt="" />
        </div>
    </div>
  )
}

export default ImgGallery