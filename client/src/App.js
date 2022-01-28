import React from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList'; 
import Card from 'react-bootstrap/Card';



export default () => {
  return( 
  <div className='container' >
    <p></p>
    <p>
      <Card bg='info' className="text-center">
  <Card.Title>PUBLIC BLOG</Card.Title>
</Card>
</p>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
      <p></p>
  </div>
  );
};