import React from "react";
import Logo from "../../components/shared/Logo";
import UserList from "../../components/userList";
import User from "../../models";
import { UserService } from "../../services/UserService";
import './Contacts.css';


interface ContactsState {
    userList?: User[];
    loading: boolean;
}
export default class Contacts extends React.Component<{ history: any },ContactsState> {
    userService: UserService = new UserService();

    constructor(props: any) {
        super(props)
        this.state = {
            userList: undefined,
            loading: true
        }

        this.redirectToUserProfile = this.redirectToUserProfile.bind(this);
    }
    
    componentDidMount() {
        this.userService.getAll()
            .then((result: User[]) => this.setState({userList: result, loading: result === []}))
            .catch(_ => alert("An Error Occured"));
    }

    redirectToUserProfile(user: User) {
        this.props.history.push(`/profile/${user.id}`)
    }
    
    render() {
        if (this.state.loading)
            return (
                <div>
                    <Logo />
                    {
                        this.state.userList === [] ?
                            <h2> No users found </h2>
                        : <div></div>
                    }
                </div>
            )
        else {
            return this.state.userList === [] ?
                <div>Il n'y a aucun utilisateur d'enregistré</div>
            :
                <UserList userList={this.state.userList!} onClickCallBack={this.redirectToUserProfile}/>
        } 
    }
}