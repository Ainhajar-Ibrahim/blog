import React, { useState} from "react";
import axios from 'axios';
import Card from 'react-bootstrap/Card';
export default () => {
    const [title, setTitle] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault ();

        await axios.post('http://posts.com/posts/create', {
            title
        });

        setTitle('');
    }

    return <div>
        <Card  >
        <Card.Header>Create a Post</Card.Header>   
        <Card.Body>
        <form onSubmit={onSubmit}>
            <p>
            <div>
                <label>Title</label>
                <input value={title} onChange={e => setTitle(e.target.value)} className="form-control" />
            </div>
            </p>
            <button className="btn btn-info">Submit</button>
        </form>
        </Card.Body> 
        </Card>
    </div>
};