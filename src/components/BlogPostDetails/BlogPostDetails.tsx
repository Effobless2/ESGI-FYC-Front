import React from "react";
import { BlogPost } from '../../models/BlogPost';
import './BlogPostDetails.css';


interface BlogPostDetailsProp {
    blogPost: BlogPost;
}

export default class BlogPostDetails extends React.Component<BlogPostDetailsProp> {
    componentDidMount(){
    }

    render() {
        return (
            <div className="post">
                <h1 id="title">{this.props.blogPost.title}</h1>
                <p id="content">{this.props.blogPost.content}</p>
            </div>
        );
    }
}