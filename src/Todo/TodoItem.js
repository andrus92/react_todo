import React from "react";

export default function TodoItem(props) {
    return (<li><strong>{props.index + 1} </strong>{props.todo.title}</li>)
};