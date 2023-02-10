import React from 'react'
import "./Card.css"

export default function card(props) {
  return (
    <div>
        <p className="cardName">{props.name}</p>
    </div>
  )
}
