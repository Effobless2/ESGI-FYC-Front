import React from "react";
import { connect } from "react-redux";
import BlogPostForm from "../../components/forms/blogPostForm/BlogPostForm";
import { BlogPost } from "../../models/BlogPost";
import { BlogPostsService } from "../../services/BlogPostsService";
import { StoreType } from "../../store";

interface CreateBlogPostState {
    loading: boolean;
    blogPostData?: BlogPost;
}

interface TokenState {
    token: string;
}

interface CreateBlogPostProp {
    history: any;
}


const mapStateProp = (state: StoreType, _:CreateBlogPostProp): TokenState => ({
    token: state.token.token
});

type Prop = TokenState & CreateBlogPostProp;

class CreateBlogPost extends React.Component<Prop, CreateBlogPostState> {
    blogPostService: BlogPostsService = new BlogPostsService();

    constructor(props: any) {
        super(props);
        this.state = {
            loading: true
        };

        this.onSubmitCallback = this.onSubmitCallback.bind(this);
    }

    componentDidMount() {
        if (this.props.token === ''){
            this.props.history.push('/loging');
        }
    }

    onSubmitCallback(blogPost: BlogPost) {
        this.blogPostService.create(this.props.token, blogPost)
            .then((result: BlogPost) => this.props.history.push(`/blogpost/${result.id!}`))
            .catch(_ => alert("An Error Occured"));
    }

    render() {
        return(
            <div><BlogPostForm blogPost={this.state.blogPostData!} onCreateBlogPost={this.onSubmitCallback}/></div>
        );
    }
}

export default connect(mapStateProp)(CreateBlogPost);