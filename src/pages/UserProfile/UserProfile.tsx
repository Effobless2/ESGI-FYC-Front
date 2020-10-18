import React from "react";
import BButton from 'react-bootstrap/Button';
import Logo from "../../components/shared/Logo";
import User from "../../models";
import { UserService } from "../../services/UserService";
import UserDescription from '../../components/UserDescription';

interface UserProfileState {
    userDatas?: User
    loading: boolean;
}

export default class UserProfile extends React.Component<{ match: { params: { userId: number } }, history: any }, UserProfileState> {
    userService: UserService;

    constructor(props: any) {
        super(props);
        this.state = {
            userDatas: undefined,
            loading: true
        };
        this.userService = new UserService();
    }

    componentDidMount() {
        let userId = this.props.match.params.userId;

        this.userService.get(userId)
            .then((result: User) => {
                this.setState({userDatas: result});
            })
            .catch(err => this.setState({loading: false}));
        
    }

    render() {
        if (this.state.userDatas !== undefined)
            return (
                <div>
                    <UserDescription user={this.state.userDatas!}/>
                    <BButton onClick={() => this.props.history.push(`/profile/edit/${this.state.userDatas!.id}`)}>
                        Edit
                    </BButton>
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