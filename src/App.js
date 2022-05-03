import React from "react";
import TodoList from "./Todo/TodoList";


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


  return (
    <div className="wrapper">
      <h1>React</h1>

      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  );
};

export default App;
