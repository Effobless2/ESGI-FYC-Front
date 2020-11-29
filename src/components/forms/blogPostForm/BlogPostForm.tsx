import React, { ChangeEvent, FormEvent } from 'react';
import BButton from 'react-bootstrap/Button';
import BForm from 'react-bootstrap/Form';
import { BlogPost } from "../../../models/BlogPost";
import './BlogPostForm.css';

interface BlogPostState {
    title: string;
    content: string;
}

interface CreateBlogPostProp {
    onCreateBlogPost: (dataRegistration: BlogPost) => any;
    blogPost?: BlogPost;
}

export default class BlogPostForm extends React.Component<CreateBlogPostProp, BlogPostState> {

    constructor(props: CreateBlogPostProp) {
        super(props);

        if(props.blogPost) {
            this.state = {
                title: props.blogPost.title,
                content: props.blogPost.content
            }
        } else {
            this.state = {
                title: '',
                content: ''
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.isValidState = this.isValidState.bind(this);
        this.titleOnChangeHandler = this.titleOnChangeHandler.bind(this);
        this.contentOnChangeHandler = this.contentOnChangeHandler.bind(this);
    }

    render() {
        return(
            <BForm className="form" onSubmit={this.handleSubmit}>
                <BForm.Group controlId="formTitle">
                    <BForm.Label>Title:</BForm.Label>
                    <BForm.Control
                        placeholder="Enter a title"
                        value={this.state.title}
                        onChange={this.titleOnChangeHandler}
                        required={true}
                    />
                </BForm.Group>

                <BForm.Group controlId="formContent">
                    <BForm.Label>Your post:</BForm.Label>
                    <BForm.Control as="textarea" rows={8}
                        placeholder="Enter your post"
                        value={this.state.content}
                        onChange={this.contentOnChangeHandler}
                        required={true}
                    />
                </BForm.Group>

                <BButton className="button"
                    type="submit"
                    disabled={!this.isValidState()}>
                    Submit
                </BButton>
            </BForm>
        );
    }

    handleSubmit(event: FormEvent){
        event.preventDefault();
        if(this.isValidState())
            this.props.onCreateBlogPost({
                title: this.state.title,
                content: this.state.content,
                createdAt: new Date(),
                idUser: 1
            });
    }

    isValidState(): boolean {
        if (this.state.title === '')
            return false;
        if (this.state.content === '')
            return false;
        return true;
    }

    titleOnChangeHandler(event: ChangeEvent<HTMLInputElement>) {
        this.setState({
            title: event.target.value ?? ''
        });
    }

    contentOnChangeHandler(event: ChangeEvent<HTMLInputElement>) {
        this.setState({
            content: event.target.value ?? ''
        });
    }

}
