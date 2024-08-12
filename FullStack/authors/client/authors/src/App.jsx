import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './components/List';
import axios from 'axios'
import Base from './components/base';
import Form from './components/form';
import Updating from './components/Updating';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [authorsList,setAuthorsList] =useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/author").then((res) => {
      setAuthorsList(res.data.authors)
      console.log(res.data.authors)
    })}, [])
    const createauthor = (name) => {
      axios.post('http://localhost:8000/api/author', { name })
        .then((res) => {
          console.log(res.data.author);
          setAuthorsList(prevList => [...prevList, res.data.author]);
        })
        .catch(err => console.log(err));
    }
    
  return (
    <>
    
      <Routes>
        <Route path="/authors" element={<><Base link={"/authors/new"} linkname={"Add an author"} sentence={"We have qoutes by"}/> <List theList={authorsList} setAuthorsList={setAuthorsList}/> </>}/>
        <Route path="/authors/new" element={<><Base link={"/authors"} linkname={"Home"} sentence={"Add a new author"}/> <Form handelSubmit={createauthor} authorName={""}/></>}/>
        <Route path="/author/:id/edit" element={<><Base link={"/authors"} linkname={"Home"} sentence={"edit this author"}/> <Updating setAuthorsList={setAuthorsList}/></>}/>
      </Routes>
    </>
  )
}

export default App
