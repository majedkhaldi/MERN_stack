import React, { useState } from 'react'

const Form = (props) => {
    const [name,setName] = useState(props.authorName)

    const submitForm = (e) => {
        e.preventDefault()
        props.handelSubmit(name)
    } 
    return (
   <form onSubmit={submitForm}>

               <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
               </div>
               <button>Submit</button>

    </form>
  )
}

export default Form