import React from "react";
import './ListItem.css';

interface ItemProps {
    content: number;
}

export default class ListItem extends React.Component<ItemProps> {
    render() {
        return (<h2>{this.props.content}</h2>);
    }
}