import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import axios from 'axios';

const Form = (props) => {

  const [theID, setTheID] = useState();
  const [option, setoption] = useState();
  const nav = useNavigate();
  // useEffect(() => {
  //   axios.get("https://swapi.dev/api/films/")
  //     .then(response => setoptions(response.data.results))
  //     .catch(err => { console.log(err) });
  // }, [])
  function showresults(e){
    e.preventDefault();
    props.takeparameters(option,theID);
    nav("/route")
  }
  return (
    <form onSubmit={showresults}>
    <select onChange={e => setoption(e.target.value)}>
        <option value="films/" className="text-capitalize">films</option>
        <option value="people/" className="text-capitalize">people</option>
        <option value="planets/" className="text-capitalize">planets</option>
        <option value="species/" className="text-capitalize">species</option>
        <option value="starships/" className="text-capitalize">starships</option>
        <option value="vehicles/" className="text-capitalize">vehicles</option>     
    </select>
    <input type="number" onChange={e =>setTheID(e.target.value)}/>
    <button>search</button>

    </form>
  );
}


const Display = (props) => {
  const [result, setResult] = useState({})
  useEffect(() => {
    axios.get(props.neededURL)
      .then(response => (setResult(response.data)))
      // .catch(err => { console.log(err) });
  }, [props.neededURL])
  return (
    <div>
      {Object.keys(result).map((item, index) => <li key={index}>{item} : {result[item]}</li>)}
    </div>
  )

}



function App() {
  const [url, seturl] = useState("")
  function findTheLost(cat,id){
    seturl(`https://swapi.dev/api/${cat}${id}`)
  }
  return (
    <>
    <Form takeparameters = {findTheLost}/>
    <Routes>
    
    <Route path='/route' element={<Display neededURL = {url}/>}></Route>
    </Routes>
    </>
  )
}

export default App
