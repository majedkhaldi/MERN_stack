import React from 'react'

export default function Thebutton(props) {
      const handleClick = () => {
    props.thefun(props.thecount + 1);
  }
  return (
    <div>
        <button onClick={ handleClick }>Birthday Button for {props.firstname}{props.lastname}</button>

    </div>
  )
}
