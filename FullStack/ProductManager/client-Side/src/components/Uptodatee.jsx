import axios from 'axios'
import React, {  useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";



const Uptodatee = (props) => {

     const [title, setTitle] = useState("")
     const [price, setPrice] = useState(0)
     const [description, setDescription] = useState("")

     const {id} = useParams();
     const navigate = useNavigate();

    //  const [thispro,setPro] = useState({});
   useEffect(
     ()=>{axios.get("http://localhost:8000/api/product/"+id).then((res)=>{
       setTitle(res.data.product.title)
       setPrice(res.data.product.price)
       setDescription(res.data.product.description)
       
     }) }, [])





     const handelSubmit = (e) => {
          e.preventDefault();
          axios.patch('http://localhost:8000/api/product/'+id, {
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
          navigate("/products")
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

export default Uptodatee