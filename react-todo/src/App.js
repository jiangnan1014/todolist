import React from 'react';
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      id: 1,
    }
  }
  render() {
    return (
      <div className="app">
        <div className="top">
          <div className="header">
            <p className="logo">ToDoList</p>
            <input
              className="input"
              type="text"
              placeholder="添加ToDo"
              onKeyDown={this.handleKeydown.bind(this)}
            // value={this.state.value}
            />
          </div>
        </div>
        <div className="box">
          <div className="content">
            <div className="todo">
              <p className="task">正在进行</p>
              <p className="count">{this.todoNumber()}</p>
            </div>
            {this.state.list.map((item, index) => {
              return (<div className="list" key={index} style={{ display: (!item.isSelected) ? "" : "none" }}>
                <input className="select" type="checkbox" checked={item.isSelected}
                  onChange={this.handleClick.bind(this, item.id)} />
                <p className="detail">{item.name}</p>
                <input className="delete" type="button" onClick={this.handleDel.bind(this, item.id)} />
              </div>)
            })}
            <div className="todo">
              <p className="task">已经完成</p>
              <p className="count">{this.doneNumber()}</p>
            </div>
            {this.state.list.map((item, index) => {
              return (<div className="lists" key={index} style={{ display: (item.isSelected) ? "" : "none" }}>
                <input className="select" type="checkbox" checked={item.isSelected}
                  onChange={this.handleClick.bind(this, item.id)} />
                <p className="detail">{item.name}</p>
                <input className="delete" type="button" onClick={this.handleDel.bind(this, item.id)} />
              </div>)
            })}
          </div>
          <p className="bottom">江南制造</p>
        </div>
      </div>
    )
  }
  handleKeydown(e) {
    if (e.keyCode == 13) {
      if (e.target.value != "") {
        var obj = {};
        var list = this.state.list
        var id = this.state.id
        obj.name = e.target.value
        obj.isSelected = false;
        obj.id = id
        id = id + 1
        list.push(obj)
        this.setState({
          list,
          id,
        })
      }
      e.target.value = ""
    }

  }
  handleClick(id) {
    var id = id
    var list = this.state.list
    list.forEach(item => {
      if (item.id == id) {
        item.isSelected = !item.isSelected
      }
    })
    this.setState({
      list
    })
  }
  handleDel(id) {
    var id = id
    var list = this.state.list
    var index = list.findIndex(item => {
      if (item.id == id) {
        return true
      }
    })
    list.splice(index, 1)
    this.setState({
      list
    })
  }
  todoNumber() {
    var list = this.state.list
    var todolist = list.filter(item => {
      if (!item.isSelected) {
        return true
      }
    })
    return todolist.length
  }
  doneNumber() {
    var list = this.state.list
    var donelist = list.filter(item => {
      if (item.isSelected) {
        return true
      }
    })
    return donelist.length
  }
}

export default App;
