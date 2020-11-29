import React from "react";
import BButton from 'react-bootstrap/Button';
import { connect } from "react-redux";
import BlogPostDetails from "../../components/BlogPostDetails";
import Logo from "../../components/shared/Logo";
import { BlogPost } from '../../models/BlogPost';
import { User } from "../../models/User";
import { BlogPostsService } from "../../services/BlogPostsService";
import { StoreType } from "../../store";
import './ReadBlogPost.css';

interface BlogPostState {
    blogPostData?: BlogPost
    loading: boolean;
    show: boolean;
}

interface TokenProp {
    token: string;
    user: User | null;
}

interface ReadBlogProp {
    match: { params: { id: number } };
    history: any;
}

const mapStateProp = (state: StoreType, _:ReadBlogProp): TokenProp => ({
    token: state.token.token,
    user: state.user.user
});

type Prop = TokenProp & ReadBlogProp;

class ReadBlogPost extends React.Component<Prop, BlogPostState> {
    blogPostsService: BlogPostsService;

    constructor(props: any) {
        super(props);
        this.state = {
            blogPostData: undefined,
            loading: true,
            show: false
        };
        this.blogPostsService = new BlogPostsService();

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.controlsAppears = this.controlsAppears.bind(this);
    }

    onDeleteHandler() {
        if (this.controlsAppears()){
            this.blogPostsService.delete(this.props.token, this.props.match.params.id).then((_) => {
                this.props.history.push('/blogposts');
            })
        }
    }

    controlsAppears() {
        return this.props.token !== '' &&
            this.props.user !== null &&
            this.state.blogPostData !== undefined &&
            this.state.blogPostData.user!.id === this.props.user!.id;
    }

    componentDidMount() {
        let id = this.props.match.params.id;

        this.blogPostsService.get(id)
            .then((result: BlogPost) => {
                this.setState({blogPostData: result});
            })
            .catch(_ => this.setState({loading: false}));
    }

    render() {
        if (this.state.blogPostData !== undefined) {
            return(
                <div>
                    <BlogPostDetails blogPost={this.state.blogPostData} />
                    {
                        this.controlsAppears() ? 
                        <div className="controls">
                            <BButton onClick={() => this.props.history.push(`/blogpost/edit/${this.state.blogPostData!.id}`)}>
                                Edit
                            </BButton>
                            <BButton variant="danger" onClick={this.onDeleteHandler}>
                                Delete
                            </BButton>
                        </div> :
                        <div></div>
                    }
                </div>
            );
        } else {
            return (
                <div>
                    <Logo />
                    { !this.state.loading ? 
                        <div>Blog post not found</div> : 
                        <div></div>
                    }
                </div>
            );
        }
    }
}

export default connect(mapStateProp)(ReadBlogPost);