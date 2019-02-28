import React, { Component, Fragment } from "react";
import "./style.css";
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
        {/* todolist */}
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            className="input"
            onChange={this.handleInputChange.bind(this)}
            value={this.state.inputValue}
          />
          <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <li
                dangerouslySetInnerHTML={{ __html: item }}
                onClick={this.handleItemDelete.bind(this, index)}
                key={index}
              />
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
