import React from 'react'

const Dbutton = (props) => {

    return (
        <button onClick={props.deleteThething} className='btn btn-danger'>Delete</button>
    )
}

export default Dbutton