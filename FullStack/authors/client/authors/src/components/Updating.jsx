import Form from './form';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Updating = ({ setAuthorsList, authorsList }) => {
    const [thisAuthor, setThisAuthor] = useState({});
    const [loaded, setLoaded] = useState(false);
    const { id } = useParams();
    const nav = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`).then((res) => {
            setThisAuthor(res.data.author);
            setLoaded(true);
        }).catch(err => console.log(err));
    }, [id]);

    const updateauthor = (name) => {
        axios.patch(`http://localhost:8000/api/author/${id}`, { name })
            .then((res) => {
                const updatedAuthor = res.data.author;
                setAuthorsList(prevList =>
                    prevList.map(author =>
                        author._id === updatedAuthor._id ? updatedAuthor : author
                    )
                );
                nav('/authors');
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            {loaded && (<Form handelSubmit={updateauthor} authorName={thisAuthor.name} />)}
        </div>
    );
};

export default Updating;
