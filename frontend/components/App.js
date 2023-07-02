import React from 'react'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: true
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
  }
}
  render() {
    const { todos } = this.state;
    //console.log(todos)
    return (
      <div>
       <h1>Todos</h1>
       <ul>
        {
          todos.map(todo => {
            return (<li>{todo.task} {todo.completed?<span>- completed</span> : <span></span> }</li>)
          })
        }
      </ul>
      
      <form>
        <input>
        <button>Add</button>
        </input>
      </form>

      <button>Clear</button>
      
      
      </div>

    )
  }
}
