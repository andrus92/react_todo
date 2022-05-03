import React from "react";
import TodoList from "./Todo/TodoList";


function App() {
  const todos = [
    {id: 1, completed: false, title: 'To buy some bread'},
    {id: 2, completed: false, title: 'To buy some butter'},
    {id: 3, completed: false, title: 'To buy some milk'},
  ];


  return (
    <div className="wrapper">
      <h1>React</h1>

      <TodoList todos={todos}/>
    </div>
  );
};

export default App;
