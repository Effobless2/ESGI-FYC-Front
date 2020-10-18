import React from "react";
import Logo from "../../components/shared/Logo";
import User from "../../models";
import EditFormular from '../../components/forms/signUp';
import { UserService } from "../../services/UserService";

interface EditProfileState {
    loading: boolean;
    userDatas?: User;
}

export default class EditProfile extends React.Component<{match: { params: { userId: number } }, history: any }, EditProfileState> {
    userService: UserService = new UserService();

    constructor(props: any) {
        super(props);
        this.state = {
            loading: true
        };

        this.onSubmitCallback = this.onSubmitCallback.bind(this);
    }

    componentDidMount() {
        this.userService.get(this.props.match.params.userId)
            .then((result: User) => this.setState({
                loading: result === undefined,
                userDatas: result
            }))
            .catch(_ => this.setState({ loading: false }));
    }

    onSubmitCallback(user: User) {
        this.userService.put(user)
            .then((result: number) => this.props.history.push(`/profile/${result}`))
            .catch(err => alert("An Error Occured"));
    }

    render() {
        if (this.state.userDatas !== undefined)
            return <EditFormular user={this.state.userDatas!} onSignup={this.onSubmitCallback}/>
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