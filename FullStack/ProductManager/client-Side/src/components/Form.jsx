import axios from 'axios'
import React, {  useState } from 'react'



const Form = (props) => {

     const [title, setTitle] = useState("")
     const [price, setPrice] = useState(0)
     const [description, setDescription] = useState("")







     const handelSubmit = (e) => {
          e.preventDefault();
          axios.post('http://localhost:8000/api/product', {
               title,
               price,
               description

          }).then((res) => {
               
               console.log(res.data.product)
               props.addtolist(res.data.product)
          })
               .catch(err => console.log(err));

          setTitle("")
          setPrice(0)
          setDescription("")

     }


     return (

          <form onSubmit={handelSubmit}>

               <div>
                    <label htmlFor="title">title</label>
                    <input type="text" name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
               </div>
               <div>
                    <label htmlFor="price">price</label>
                    <input type="number" name='price' value={price} onChange={(e) => setPrice(e.target.value)} />
               </div>
               <div>
                    <label htmlFor="description">description</label>
                    <input name="description" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
               </div>
               <button>Submit</button>

          </form>
     )
}

export default Form