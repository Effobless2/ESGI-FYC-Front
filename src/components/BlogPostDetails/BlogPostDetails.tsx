import React from "react";
import { BlogPost } from '../../models/BlogPost';
import './BlogPostDetails.css';


interface BlogPostDetailsProp {
    blogPost: BlogPost;
}

export default class BlogPostDetails extends React.Component<BlogPostDetailsProp> {
    componentDidMount(){
        document.getElementById("title")!.innerHTML += this.props.blogPost.title;
        document.getElementById("content")!.innerHTML += this.props.blogPost.content;
    }

    render() {
        return (
            <div className="post">
                <h1 id="title"></h1>
                <p id="content"></p>
            </div>
        );
    }
}