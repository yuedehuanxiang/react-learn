import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";
import "./style.css";
// import Test from "./Test";
class TodoList extends Component {
  shouldComponentUpdate() {
    // console.log(1);
    return true;
  }
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }
  render() {
    // console.log("render");
    return (
      <Fragment>
        {/* todolist */}
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            className="input"
            onChange={this.handleInputChange}
            value={this.state.inputValue}
            ref={input => (this.input = input)}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>{this.getTodoItem()}</ul>
        {/* <Test content={this.state.inputValue} /> */}
      </Fragment>
    );
  }
  getTodoItem() {
    return this.state.list.map((item, index) => {
      return <TodoItem key={index} deleteItem={this.handleItemDelete} index={index} content={item} />;
    });
  }
  handleInputChange(e) {
    // console.log(e.target);
    // console.log(this.input);
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value
    }));
  }
  handleBtnClick() {
    this.setState(prevState => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ""
    }));
  }
  handleItemDelete(index) {
    // immutable
    // state 不允许我们做任何的改变
    this.setState(prevState => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return { list };
    });
  }
}

export default TodoList;
