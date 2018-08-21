import React, {Component} from 'react';
import './BlogPost.css'; 

class BlogPost extends Component{
	constructor(props){
		super(props);
    	console.log('[BlogPost.js] Inside Constructor', props);
	}

	render(){ 
		console.log('[BlogPost.js] inside render()', this);
		return(
			    <div className="BlogPost"> 
			        <div className="BlogTitle">{this.props.title}</div>
			        <div className="BlogContent">{this.props.content}</div>
			    </div> 
		)	
	}
} 

export default BlogPost;