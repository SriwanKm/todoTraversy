import React, {Component} from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
    // Create getStyle in order to reuse many time + include alternately operator to change the style
    // depending on the complete state
    getStyle = () => {
        return {
            background: "#f4f4f4",
            padding: "10px",
            borderBottom: "1px #ccc dotted",
            textDecoration: this.props.todo.completed ? "line-through" : "none",
        };
    };

    componentDidMount = (props) => {
        console.log(this.props.todo);
    };

    render() {
        // Create this to reach the element from (this.props.todo) without repeating many times
        const {id, title, completed} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input
                        type="checkbox"
                        defaultChecked={completed}
                        onChange={this.props.markComplete.bind(this, id)}
                    />{" "}
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
                        x
                    </button>
                </p>
            </div>
            //bind in order to bind the id with listener up to > Todos > App level
        );
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
};

// Unlike css here using camel case and ',' instead of ';'
const btnStyle = {
    background: "#ff0000",
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
};

export default TodoItem;
