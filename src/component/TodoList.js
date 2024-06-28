import React from 'react';
import './TodoList.css';

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li
        
          key={todo.id}
          className={todo.completed ? 'completed' : '' }
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.text}
          <button className='Del-btn' onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;







































































































// import React , { useState }from 'react';
// import Todoform from './Todoform';
// import Todo from './Todo';

// const Todolist = () => {

//     const [todos , setTodo] = useState([]);

//     const addTodo = todo => {
//         if (!todo.text || /^\s*$/.test(todo.text)) {
//             return;
//         }
    
//     const newTodo = [todo , ...todos];

//     setTodo(newTodo);
//     // console.log(todo , ...todo)
//    };

//    const removeTodo = id => {
//     const removeArr = [...todos].filter(todo => todo.id !== id) 
//     setTodo(removeArr)
//    };
//    const completeTodo = id => {
//     let updatedTodo = todos.map( todo => {
//         if(todo.id === id) {
//             todo.isComplete = !todo.isComplete;
//         }
//         return todo;
//     });
//         setTodo(updatedTodo);
//    };
//   return (
//     <>
//      <h1>What is your today's plane?</h1>
//      <Todoform onSubmit={addTodo} /> 
//      <Todo todo={todos} completeTodo={completeTodo} removeTodo={removeTodo}/>
//     </>
//   )
// }

// export default Todolist;
