import React from 'react'


class Todo extends React.Component {
  handleClick = () => {
    console.log("handle click", this.props.todo.id);
  }
  render(){
    return (<li>{this.props.todo.task} { this.props.todo.completed?<span>- completed</span> : <span></span> }</li>);
  }
}

export default Todo;