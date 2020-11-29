import React from "react";
import { connect } from "react-redux";
import BlogPostForm from '../../components/forms/blogPostForm';
import Logo from "../../components/shared/Logo";
import { BlogPost } from "../../models/BlogPost";
import { User } from "../../models/User";
import { BlogPostsService } from "../../services/BlogPostsService";
import { StoreType } from "../../store";

interface BlogPostState {
    loading: boolean;
    blogPostData?: BlogPost;
}

interface EditBlogPostProp {
    match: { params: { id: number } };
    history: any;
}

interface TokenProp {
    token: string;
    user: User | null;
}

const mapStateProp = (state: StoreType, _:EditBlogPostProp): TokenProp => ({
    token: state.token.token,
    user: state.user.user
});

type Prop = EditBlogPostProp & TokenProp;

class EditBlogPost extends React.Component<Prop, BlogPostState> {
    blogPostsService: BlogPostsService = new BlogPostsService();

    constructor(props: Prop) {
        super(props);
        this.state = {
            loading: true
        };

        this.onSubmitCallback = this.onSubmitCallback.bind(this);
    }

    componentDidMount() {
        this.blogPostsService.get(this.props.match.params.id)
            .then((result: BlogPost) => this.setState({
                loading: result === undefined,
                blogPostData: result
            }))
            .catch(_ => this.setState({ loading: false }));
    }

    onSubmitCallback(blogPost: BlogPost) {
        blogPost.id = this.props.match.params.id;
        this.blogPostsService.put(this.props.token, blogPost)
            .then((result: BlogPost) => this.props.history.push(`/blogpost/${result.id}`))
            .catch(_ => alert("An Error Occured"));
    }

    render() {
        if (this.state.blogPostData === undefined||
            this.props.user === null ||
            this.state.blogPostData!.user!.id! !== this.props.user!.id!) {
            return  <div>
                        <Logo />
                        <div>Action not permited</div>
                    </div>
        }
        else if (this.state.blogPostData !== undefined)
            return <BlogPostForm blogPost={this.state.blogPostData} onCreateBlogPost={this.onSubmitCallback}/>
        else {
            return (
                <div>
                    <Logo />
                    { !this.state.loading ? 
                        <div>Post not found</div> : 
                        <div></div>
                    }
                </div>
            )
        }
    }
}

export default connect(mapStateProp)(EditBlogPost);