import React from "react";
import BButton from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Logo from "../../components/shared/Logo";
import UserDescription from '../../components/UserDescription';
import User from "../../models";
import { UserService } from "../../services/UserService";
import './UserProfile.css';

interface UserProfileState {
    userDatas?: User
    loading: boolean;
    show: boolean;
}

export default class UserProfile extends React.Component<{ match: { params: { userId: number } }, history: any }, UserProfileState> {
    userService: UserService;

    constructor(props: any) {
        super(props);
        this.state = {
            userDatas: undefined,
            loading: true,
            show: false
        };
        this.userService = new UserService();

        this.deleteUser = this.deleteUser.bind(this);
        this.showModal = this.showModal.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount() {
        let userId = this.props.match.params.userId;

        this.userService.get(userId)
            .then((result: User) => {
                this.setState({userDatas: result});
            })
            .catch(_ => this.setState({loading: false}));
    }

    deleteUser() {
        let userId = this.props.match.params.userId;
        this.setState({show : false})
        this.userService.delete(userId)
            .then((result: any) => {
                this.props.history.push("/contacts");
            })
            .catch(_ => alert("An Error Occured"));
    }

    showModal() {
        this.setState({show: true});
    }

    handleClose() {
        this.setState({show: false});
    }

    render() {
        if (this.state.userDatas !== undefined)
            return (
                <div>
                    <UserDescription user={this.state.userDatas!}/>
                    <BButton onClick={() => this.props.history.push(`/profile/edit/${this.state.userDatas!.id}`)}>
                        Edit
                    </BButton>
                    <BButton  variant="danger" onClick={this.showModal}>
                        Delete
                    </BButton>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Warning !!!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Are you sure that you want tu delete {this.state.userDatas.firstName} {this.state.userDatas.lastName} ?</Modal.Body>
                        <Modal.Footer>
                            <BButton variant="secondary" onClick={this.handleClose}>
                                Close
                            </BButton>
                            <BButton variant="danger" onClick={this.deleteUser}>
                                Delete
                            </BButton>
                        </Modal.Footer>
                    </Modal>
                </div>
            )
        else {
            return (
                <div>
                    <Logo />
                    { !this.state.loading ? 
                        <div>User not found</div> : 
                        <div></div>
                    }
                </div>
            )
        }

    }
}