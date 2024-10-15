import React from 'react'
import './dropdown.css'
import { Link } from 'react-router-dom'
const Dropdown = () => {
  return (
    <div className='dropdown'>
      <ul className='items'>
        <li><Link to={'/architecture'}>Architecture</Link> </li>
        <li><Link to={'/event'}>Event</Link></li>
        <li><Link to={'/nature'}>Natural Beauty</Link></li>
      </ul>
    </div>
  )
}

export default Dropdown