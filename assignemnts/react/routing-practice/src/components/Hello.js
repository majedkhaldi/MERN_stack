import React from 'react'
import {
    Routes,
    Route,
    Link 
  } from "react-router-dom";
  import { useParams } from "react-router"; 

export default function Hello() {
    const  { nums } = useParams()
    const  { tc } = useParams()
    const  { bc } = useParams()


    if (isNaN(nums)){
        return (
        
            <div style={{color: tc, background:bc}}>The Word is : {nums}</div>
            
          );
    }
    else{
        return (
        
            <div style={{color: tc, background:bc}}>The number is : {nums}</div>
            
          );

    }

   
}
