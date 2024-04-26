import React from 'react'
import './style.css'

export default function Container(props) {
  return <div className="container min_height">{props.children}</div>
}
