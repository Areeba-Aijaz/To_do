// import React , { useState} from 'react';
// import './App.css';
// import Client from './Client';
// import Todolist from './component/Todolist';
// import Todo from './component/Todo';
// import TodoApp from './component/Todoapp';
// function App() {

//   const [todo , setTodo] = useState("")

//   return (
//     <div className="App">
//       <TodoApp />
//       {/* <Todolist /> */}
//       {/* <Todo /> */}
//       {/* <Client data={{name: 'areeba' , age: '20'}}/> */}
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import './App.css';
import TodoList from './component/TodoList';
import TodoForm from './component/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: new Date().getTime(),
      text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const deleteTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id) 
        setTodos(removeArr)
       };

  return (
    <div className="app">
      <h1 className='Heading'>What is your today's plane</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;

