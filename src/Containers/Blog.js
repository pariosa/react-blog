import React, { Component } from 'react';
  
import BlogPosts from '../Components/BlogPosts/BlogPosts';
const Fragment = React.Fragment;


class Blog extends Component {

    state = {
    blogposts :  [
            {
                id: 0,
                title:'0th Blog Post',
                content:"All you need to paint is a few tools, a little instruction, and a vision in your mind. You are only limited by your imagination. Be brave. This is truly an almighty mountain. This is your world. If I paint something, I don't want to have to explain what it is. You can do anything your heart can imagine. Don't fight it, use what happens. If you overwork it you become a cloud killer. There's nothing worse than a cloud killer. I guess I'm a little weird. I like to talk to trees and animals. That's okay though; I have more fun than most people. Let your heart take you to wherever you want to be. Let the paint work. Very easy to work these to death.",
                key:0,
                image:''
            },

            { 
                id: 1, 
                title: 'First Blog Post', 
                content: "Now, we're going to fluff this cloud. Sometimes you learn more from your mistakes than you do from your masterpieces. Water's like me. It's laaazy ... Boy, it always looks for the easiest way to do things A happy cloud. It's a very cold picture, I may have to go get my coat. It’s about to freeze me to death. A tree cannot be straight if it has a crooked trunk. We don't want to set these clouds on fire. This is your creation - and it's just as unique and special as you are. Maybe there's a little something happening right here. Maybe there's a happy little Evergreen that lives here. We might as well make some Almighty mountains today as well, what the heck. Every time you practice, you learn more. Clouds are free. They just float around the sky all day and have fun.", 
                key: 1,
                image:''
            },
            { 
                id: 2, 
                title: 'Second Blog Post', 
                content: "Let's make some happy little clouds in our world. Now then, let's play. Let your heart be your guide. In life you need colors. I want everbody to be happy. That's what it's all about. Put light against light - you have nothing. Put dark against dark - you have nothing. It's the contrast of light and dark that each give the other one meaning. Almost everything is going to happen for you automatically - you don't have to spend any time working or worrying. This is unplanned it really just happens. Now let's put some happy little clouds in here. That's a crooked tree. We'll send him to Washington.",
                key: 2,
                image:''
            }
        ]
    }

    render () {  

        return (
            <Fragment>
               <BlogPosts>
               {this.state.blogposts}
               </BlogPosts>  
            </Fragment>
        );

    }
}

export default Blog;