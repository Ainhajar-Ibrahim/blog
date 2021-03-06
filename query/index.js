const express =require('express');
const bodyParser = require ('body-parser');
const cors=require('cors');

const app= express();
app.use(bodyParser.json());
app.use(cors());


const posts={};

app.get('/posts', (req, res) => {
    res.send(posts);

});

app.post('/events', (req, res) => {
    const {type, data}=req.body;
    
    if (type==='PostCreated'){
        const {id, title}= data;
        var status;
    comments= new Array;
        posts[id]={id, title, comments, status };
    }
    if (type==='CommentCreated'){
        const {id, content, postId, status}=data;
        
        posts[postId].comments.push({id, content, status});

    }
    if (type==='CommentUpdated'){
        const {id, content, postId, status}=data;
        
        pos = posts[postId];
        const comment=pos.comments.find(comment => {
            return comment.id ===id;
        });

        comment.status=status;
        comment.content=content;
    }

res.send({});
});

app.listen(4002, () => {
    console.log('Listening on 4002');
})