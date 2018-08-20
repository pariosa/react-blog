import React from 'react';
 
import BlogPost from './BlogPost/BlogPost';

const BlogPosts = ( props ) => (
    <ul className="BlogPosts">  
    here are the props {this.props}, here is the state {this.state}
    	<BlogPost >
    	{this.props}
    	</BlogPost>
    	<BlogPost />
    </ul>
);

export default BlogPosts;