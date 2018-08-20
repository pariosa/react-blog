import React from 'react';
 

const BlogPost = ( props ) => (
    <div className="BlogPost">
        <div className="title">{props.title}</div>
        <div className="content">{props.content}</div>
    </div>

);

export default BlogPost;