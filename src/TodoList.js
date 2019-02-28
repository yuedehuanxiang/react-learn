import React, { Component, Fragment } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: []
    };
  }
  render() {
    return (
      <Fragment>
        <div>
          <input onChange={this.handleInputChange.bind(this)} value={this.state.inputValue} />
          <button>提交</button>
        </div>
        <ul>
          <li>学英语</li>
          <li>learning react</li>
          <li>learn vue</li>
        </ul>
      </Fragment>
    );
  }
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }
}

export default TodoList;
