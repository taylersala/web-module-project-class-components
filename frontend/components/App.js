import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './TodoList';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
  }
}

handleAdd = (task) => {
  
  const newTodo = {
    task: "Cook Things",
    id: Date.now(),
    completed: false
  }

  this.setState({
    ...this.state,
    todos: [...this.state.todos, newTodo]
  });
}

handleClear = () => {
// seet state
//loop thru todos
// remove al todos that have class completed
// save filteed todos to state

this.setState({
...this.state,
todos: this.state.todos.filter(todo => {
  return (todo.completed === false);
})
});
}

handleToggle = () => {
  
}


  render() {
    const { todos } = this.state;
    //console.log(todos)
    return (
      <div>
       <h1>Todos</h1>
       
       <TodoList todos={todos}/>
      
       <TodoForm handleAdd={this.handleAdd} />

      <button onClick={this.handleClear}>Clear</button>
      
      
      </div>

    )
  }
}
