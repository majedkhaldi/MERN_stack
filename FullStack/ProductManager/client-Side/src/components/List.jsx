import React from 'react'
import {
     Link
} from "react-router-dom";
import axios from 'axios'
const List = (props) => {

     return (
          <div>
               <h1>batata</h1>
               <ul>
                    {props.theList.map((product, key) => (
                         <li key={key}> <Link to={`/products/${product._id}`}>{product.title} </Link> | <button onClick={()=>props.deletefun(product._id)}>Delete</button></li>
                    ))}
               </ul>
          </div>
     )
}

export default List
