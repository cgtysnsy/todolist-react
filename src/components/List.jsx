import { Component } from "react";

export default class List extends Component {
  constructor(props) {
    super(props);
  }

  deleteItem = (index) => {
    const { todos } = this.props;
    todos.splice(index, 1);
    this.props.deleteItem(todos);
  };
  clearAll = () => {
    this.props.clearAll({ todos: [] });
  };
  done = (index) => {
    const { todos } = this.props;
    todos[index].done = !todos[index].done;
    this.props.done(todos);
  };

  render() {
    const { todos, deleteItem, clearAll, done } = this.props;
    return (
      <ul>
        {todos.map((todo, index) => {
          const crossed = todo.done ? "crossed" : "";
          return (
            <li key={index} className={crossed}>
              <input
                type="checkbox"
                className="checkboxInput"
                onClick={() => this.done(index)}
              />
              {todo.name}
              <span
                className="deletebutton"
                onClick={() => this.deleteItem(index)}
              >
                X
              </span>
            </li>
          );
        })}
      </ul>
    );
  }
}
