import axios from 'axios';
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
export default ({ postId}) => {
    const [content, setContent]= useState('');
    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.post(`http://posts.com/posts/${postId}/comments` , {content});
        setContent('');
    }


    return <div>
        <Card body bg='info' >
        <form onSubmit={onSubmit}>
        <p>
            <div className='form-group'>
                <label>New Comment</label>
                <input value={content} onChange={e => setContent(e.target.value)} className='form-control' />
            </div>
            </p>
            
            <button className="btn btn-light">Submit</button>
            
        </form>
        </Card>
    </div>
}