import React, {Component} from 'react';
import './BlogPost.css'; 

class BlogPost extends Component{
	constructor(props){
		super(props);
	}

	render(){ 
		return(
			    <div className="BlogPost"> 
			        <div className="BlogTitle">{this.props.title}</div>
			        <div className="BlogContent">{this.props.content}</div>
			    </div> 
		)	
	}
} 

export default BlogPost;