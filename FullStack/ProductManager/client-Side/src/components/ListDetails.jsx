import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import {
  Link
} from "react-router-dom";
const ListDetails = (props) => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [thispro,setPro] = useState({});
useEffect(
  ()=>{axios.get("http://localhost:8000/api/product/"+id).then((res)=>{
    setPro(res.data.product)
    
  }) }, [])

  const handleDelete = (personId) => {
    // axios.delete('http://localhost:8000/api/product/' + personId)
    //     .then(res => {
    //         navigate("/products")
    //     })
    //     .catch(err => console.error(err));
    props.deletefun(personId);
    navigate("/products")
    console.log("we are in")
    
}
  return (
    <div>
     <h1>{thispro.title}</h1>
     <h1>{thispro.price}</h1>
     <h1>{thispro.description}</h1>
     <Link to={`/products/${thispro._id}/edit`}>edit</Link>
     <button onClick={()=>handleDelete(thispro._id)}>Delete</button>
    </div>
  )
}

export default ListDetails