import React from 'react'

export default function SaleItem(props) {
  return (
    <div>
        <h1>{props.lastname} {props.firstname}</h1>
        <h6>Age: {props.age}</h6>
        <h6>Hair Color: {props.color}</h6>
    </div>
  )
}
