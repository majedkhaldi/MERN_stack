import React from 'react'
import { useNavigate } from "react-router-dom";
import Dbutton from './Dbutton';
import axios from 'axios';
const List = (props) => {
    // const [listOfAuthors,setListOfAuthors] = useState([]);
    // useEffect(() => {
    //     axios.get("http://localhost:8000/api/author").then((res) => {
    //       setListOfAuthors(res.data.author)
    //       console.log(res.data.author)
    //     })}, [])
    
    const nav = useNavigate();
    const gotoupdate =(id) => {
        nav(`/author/${id}/edit`)
    }
    const removeFromDom =(id) => {
        axios.delete("http://localhost:8000/api/author/" + id)
            .then((res) => {
                console.log(res.data)
                props.setAuthorsList(props.theList.filter(person => person._id != id));
            })
            .catch((err) => console.log(err))
    }
    return (
        <div>
          <table className='table table-dark'>
            <thead>
              <tr>
                <th>Author</th>
                <th>Actions Available</th>
              </tr>
            </thead>
            <tbody>
              {props.theList.map((author, index) => (
                <tr key={index}>
                  <td>{author.name}</td>
                  <td>
                    <button className='btn btn-danger' onClick={()=>gotoupdate(author._id)}>edit</button> | <Dbutton deleteThething={()=>removeFromDom(author._id)}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );      
}

export default List