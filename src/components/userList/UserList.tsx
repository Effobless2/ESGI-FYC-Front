import React from "react";
import User from "../../models";
import UserItem from "./userItem/UserItem";

import './UserList.css';

interface UserListProp {
    userList: User[]
    onClickCallBack?: (user: User) => void;
}

export default class UserList extends React.Component<UserListProp> {
    render() {
        return (
            <div className="row">
                {this.props.userList.map(x => {
                    return <UserItem user={x} onClickCallBack={this.props.onClickCallBack} key={x.id}/>
                })}
            </div>
        )
    }
}