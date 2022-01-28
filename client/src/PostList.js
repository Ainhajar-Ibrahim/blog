import React, {useState , useEffect} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import CommentCreate from './CommentCreate';
import CommentList from './CommentList';


export default () => {
    const [posts, setPosts]= useState({});

    const fetchPosts = async () => {
        const res = await axios.get('http://posts.com/posts');

        setPosts(res.data);
    };

    useEffect(() => {
        fetchPosts();
        
    }, []);

    var count=0;
    const renderedPosts = Object.values(posts).map(post => {
        count++;
        return (


            <div key={post.id}>
            <Card  >
            <Card.Header>POST {count}</Card.Header>
            <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <CommentList comments= {post.comments} />
            <CommentCreate postId={post.id}/>
              
            </Card.Body>
            <Card.Footer  >2 days ago</Card.Footer>
          </Card>



        
          </div>




            
        )
    });


  return( 
  <div  className='d-flex flex-row flex-wrap justify-content-between'>
     {renderedPosts}
  </div>
  );
};