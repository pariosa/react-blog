import React, { Component } from 'react';
 
import BlogPost from './BlogPost/BlogPost';

class BlogPosts extends Component {
  constructor (props){
    super(props);
  }

 render(){
 	
		return this.props.children.map( (blogpost, index) => {
			return <BlogPost 
			 	//click={() => this.props.clicked(index)}
			 		  key={index}
					  title={blogpost.title}
					  content={blogpost.content}
					  />
		

		});
 

		
	}
 
} 
 
export default BlogPosts;