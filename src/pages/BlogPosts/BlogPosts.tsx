import React from "react";
import BlogPostsList from "../../components/BlogPostsList";
import { BlogPost } from "../../models/BlogPost";
import { BlogPostsService } from "../../services/BlogPostsService";
import './BlogPosts.css';


interface BlogPostsState {
    blogPosts: BlogPost[];
}

export default class BlogPosts extends React.Component<{ history: any }, BlogPostsState> {
    blogPostsService: BlogPostsService = new BlogPostsService();

    constructor(prop: any) {
        super(prop);
        this.state = {
            blogPosts: []
        };

        this.redirectToBlogPost = this.redirectToBlogPost.bind(this);
    }

    componentDidMount() {
        this.blogPostsService.getAll().then( (postsList) => {
            this.setState(
            {
                blogPosts: postsList
            }
        )});
    }

    redirectToBlogPost(blogPost: BlogPost) {
        this.props.history.push(`/blogpost/${blogPost.id}`)
    }

    render() {
        return (
            <div><BlogPostsList blogPostList={this.state.blogPosts} onClickCallBack={this.redirectToBlogPost}/></div>
        );
    }
}