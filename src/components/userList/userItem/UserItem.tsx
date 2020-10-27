import React from "react";
import BCard from 'react-bootstrap/Card';
import User from "../../../models";
import './UserItem.css';




interface UserItemProp {
    user: User;
    onClickCallBack?: (user: User) => void;
}
export default class UserItem extends React.Component<UserItemProp>{
    render() {
        return ( 
            <BCard onClick={() => {
                if (this.props.onClickCallBack !== undefined) 
                    this.props.onClickCallBack(this.props.user)
            }}>
                <BCard.Body>
                    <BCard.Title>{this.props.user.firstName} {this.props.user.lastName}</BCard.Title>
                    <BCard.Subtitle className="mb-2 text-muted"> {this.props.user.email} </BCard.Subtitle>
                </BCard.Body>
            </BCard>
        )
    }
}