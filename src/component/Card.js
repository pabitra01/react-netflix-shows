import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.imgsrc} alt="" />
        <h2>{props.name}</h2>
        <p>{props.desc}</p>
        <div className="btn">
        <a href={props.links} target="_blank">
            <button>Watch Now</button>
        </a>
        </div>
    </div>
  )
}

export default Card