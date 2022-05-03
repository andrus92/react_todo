import React from "react";
import PropTypes from "prop-types";

function TodoItem(props) {
    return (
        <li>
            <strong>{props.index + 1} </strong>{props.todo.title}
        </li>
    );
};


TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
};

export default TodoItem;