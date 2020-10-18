import React from "react";
import Logo from "../../components/shared/Logo";
import User from "../../models";
import { UserService } from "../../services/UserService";

interface UserProfileState {
    userDatas?: User
    loading: boolean;
}

export default class UserProfile extends React.Component<{ match: { params: { userId: number } } }, UserProfileState> {
    userService: UserService;

    constructor(props: { match: { params: { userId: number } } }) {
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
            return <h1>{this.state.userDatas!.firstName}</h1>
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