import React from "react";
import User from "../../models";

import './UserProfile.css';

interface UserProfileProp {
    user: User;
}

export default class UserProfile extends React.Component<UserProfileProp> {
    render() {
        return (
            <div>
                <h2>{this.props.user.firstName} {this.props.user.lastName}</h2>
                <p>Email Address : {this.props.user.email}</p>
            </div>
        )
    }
}