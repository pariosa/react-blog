import React, { Component } from 'react';

import Modal from '../Components/UI/Modal/Modal'; 
import BlogPosts from '../Components/BlogPosts/BlogPosts';
const Fragment = React.Fragment;


class Blog extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
    blogposts :  [{
            title: "Test 1",
            content: 'Test 1 Content Goes Here'
        },
        {
            title: 'Test 2',
            content: 'Test 2 Content Goes Here'
        }]
    }

    render () {  


        return (
            <Fragment>
               <BlogPosts /> 
            </Fragment>
        );
    }
}

export default Blog;