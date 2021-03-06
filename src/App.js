import React from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodo"

function App() {
  const [todos, setTodos] = React.useState([
      {id: 1, completed: false, title: 'To buy some bread'},
      {id: 2, completed: true, title: 'To buy some butter'},
      {id: 3, completed: false, title: 'To buy some milk'},
    ]
  );

  function toggleTodo(id) {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTodos);
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title: title,
          id: Date.now(),
          completed: false,
        }
      ])
    );
  }

  return (
    <Context.Provider value={{removeTodo: removeTodo}}>
      <div className="wrapper">
      <h1>React</h1>
      <AddTodo onCreate={addTodo} />
      
      {todos.length ? (
        <TodoList todos={todos} onToggle={toggleTodo} />
        ) : 
        (
          <p>No Todos</p>
        )
      }
      
      </div>
    </Context.Provider>
  );
};

export default App;
