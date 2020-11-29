import React from "react";
import { BlogPost } from "../../../models/BlogPost";
import './BlogPostItem.css';

interface BlogPostItemProp {
    blogPost: BlogPost;
    onClickCallBack?: (blogPost: BlogPost) => void;
}

export default class BlogPostItem extends React.Component<BlogPostItemProp> {

    render() {
        return(
            <div className="item" onClick={() => {
                if (this.props.onClickCallBack !== undefined) 
                    this.props.onClickCallBack(this.props.blogPost)
            }}>
                <h2 className="title">{this.props.blogPost.title}</h2>
                <div className="body">
                    <p className="preview">{this.props.blogPost.content}</p>
                </div>
                <p className="details">{this.props.blogPost.createdAt.toDateString()} by ME</p>
            </div>
        );
    }

}

