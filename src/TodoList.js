import React, { Component, Fragment } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: ["学习英文", "学习react"]
    };
  }
  render() {
    return (
      <Fragment>
        <div>
          <input onChange={this.handleInputChange.bind(this)} value={this.state.inputValue} />
          <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <li onClick={this.handleItemDelete.bind(this, index)} key={index}>
                {item}
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }
  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ""
    });
  }
  handleItemDelete(index) {
    // immutable
    // state 不允许我们做任何的改变
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list
    });
  }
}

export default TodoList;
