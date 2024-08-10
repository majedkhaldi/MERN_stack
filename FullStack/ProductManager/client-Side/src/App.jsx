import { useEffect, useState } from 'react'
import './App.css'
import ListDetails from './components/ListDetails'
import Form from './components/Form'
import List from './components/List'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios'
import Uptodatee from './components/Uptodatee'
function App() {
  const [listofproducts, setListOfProducts] = useState([])


  const theFinallist = (product) => {

    setListOfProducts([...listofproducts, product])
  }

  useEffect(() => {
    axios.get("http://localhost:8000/api/product").then((res) => {
      setListOfProducts(res.data.product)
      console.log(res.data.product)

    }).catch((err) => {
      console.log(err);
    })


  }, [])
  const handleDelete = (pId) => {
    axios.delete('http://localhost:8000/api/product/' + pId)
        .then(res => {
            removeFromDom(pId)
        })
        .catch(err => console.error(err));
    
}
const removeFromDom = pId => {
  setListOfProducts(listofproducts.filter(product => product._id != pId));
}


  return (
    <>

      <Routes>
        <Route path="/products" element={<><Form addtolist={theFinallist} /> <List theList={listofproducts} deletefun={handleDelete} /></>} />
        <Route path="/products/:id" element={<ListDetails deletefun={handleDelete}/>} />
        <Route path="/products/:id/edit" element={<Uptodatee />} />
      </Routes >
    </>
  )
}

export default App
