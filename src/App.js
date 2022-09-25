import React from "react";
import Input from "./components/Input";
import List from "./components/List";
import "./styles.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      doneTodos: []
    };
  }

  done = (todos) => this.setState({ todos });
  deleteItem = (todos) => this.setState({ todos });
  clearAll = () => this.setState({ todos: [] });

  addTask = (inputTask) => {
    const newTodos = this.state.todos;

    const task = {
      name: inputTask,
      done: false
    };
    //add task into the state
    if (inputTask) {
      newTodos.push(task);
    }
    this.setState({ todos: newTodos });

    /*const { inputTask, todos } = this.state;
    //add task into this.state
    const task = { name: inputTask, done: false };
    todos.push(task); //in here todos is the copied version of the state.todos
    this.setState({ todos: todos });
    //clear inputTas
    this.setState({ inputTask: "" });*/
  };
  render() {
    const { inputTask, todos, doneTodos } = this.state;
    return (
      <div className="App">
        <div classNmae="image-container">
          <img src="img/showcaseexample.jpg" alt="name" className="image" />
        </div>
        <div className="container">
          <h1>TODO LIST</h1>
          <Input addTask={this.addTask} />
          <div className="content">
            <List
              todos={todos}
              done={this.done}
              deleteItem={this.deleteItem}
              clearAll={this.clearAll}
            />
            <button className="btn clear" onClick={this.clearAll}>
              Clear
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
