import React from "react";
import { BlogPost } from "../../models/BlogPost";
import BlogPostItem from "./BlogPostItem/BlogPostItem";
import './BlogPostsList.css';

interface BlogPostListProp {
    blogPostList: BlogPost[]
    onClickCallBack?: (blogPost: BlogPost) => void;
}

export default class BlogPostsList extends React.Component<BlogPostListProp> {

    render() {
        return (
            <div>
                {this.props.blogPostList.map(blogPost => {
                    return <BlogPostItem blogPost={blogPost} onClickCallBack={this.props.onClickCallBack} key={blogPost.id} />
                })}
            </div>
        );
    }
}