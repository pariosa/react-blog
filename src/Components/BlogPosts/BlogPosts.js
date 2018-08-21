import React, { Component } from 'react';
 
import BlogPost from './BlogPost/BlogPost';

class BlogPosts extends Component {
  constructor (props){
    super(props);
    console.log('[BlogPosts.js] inside Constructor', props);
      console.log(this.props.children);

  }

 render(){
		 console.log('[BlogPosts.js] inside render()', this.props);
 	
		return this.props.children.map( (blogpost, index) => {
			return <BlogPost 
			 	//click={() => this.props.clicked(index)}
			 		  key={index}
					  title={blogpost.title}
					  content={blogpost.content}
					  />
		

		});

	//	return(
	//		<BlogPost />
	//		)

		
	}
 
} 
 
export default BlogPosts;