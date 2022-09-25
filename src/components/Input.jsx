import React, { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTask: ""
    };
  }

  addTask = () => {
    const inputTask = this.state.inputTask;
    this.props.addTask(inputTask);

    /*const { inputTask, todos } = this.state;
    //add task into this.state
    const task = { name: inputTask, done: false };
    todos.push(task); //in here todos is the copied version of the state.todos
    this.setState({ todos: todos });
    */
    //clear inputTas
    this.setState({ inputTask: "" });
  };

  onChange = (event) => {
    const inputValue = event.target.value;
    console.log(inputValue);
    //store value inside state;

    this.setState({ inputTask: inputValue });
  };

  render() {
    const { inputTask } = this.state;
    return (
      <div className="new-task">
        <input
          placeholder="Add a task"
          onChange={this.onChange}
          value={inputTask}
        />
        <button onClick={this.addTask} type="button" className="btn add">
          Add
        </button>
      </div>
    );
  }
}
