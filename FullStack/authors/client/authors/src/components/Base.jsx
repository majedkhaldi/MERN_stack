import React, { useState } from 'react'
import {
    Routes,
    Route,
    Link
  } from "react-router-dom";

const Base = (props) => {


  return (
    <>
      <div>Favorite Authors</div>
      <Link to={props.link}>{props.linkname} </Link>
      <p>{props.sentence}</p>
    </>
    
  )
}

export default Base