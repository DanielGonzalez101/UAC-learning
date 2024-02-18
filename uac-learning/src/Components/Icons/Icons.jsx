import React from "react";
import './icons.css'

const Icons = ({ position, src }) => {
  return (
    <image src={src} className={`icon${position}`} />
  )
}

export default Icons