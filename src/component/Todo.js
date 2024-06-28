



























































































// import React , { useState } from 'react';
// import Todoform from './Todoform';
// import { RiCloseCircleLine } from 'react-icons/ri';
// import { TiEdit } from 'react-icons/ti';


// const Todo = (todos , completeTodo , removeTodo) => {
//     const [edit , newEdit] = useState({
//         id: null,
//         value: ''
//     });
//   return todos.map((todo , index) => (
   
//     <div 
//     className={todo.isComplete ? 'todo-row complete' : 'todo-row' }key={index}>
//         <div key={todo.id} onClick={() => completeTodo(todo.id)}>
//        {todo.text}
//         </div>

//         <div className='icons'>
//             <RiCloseCircleLine 
//             onClick={() => removeTodo(todo.id)}
//             className='deleteIcon'
//             />
//             <TiEdit  
//             onClick={() => newEdit({id: todo.id,value:todo.text})}
//             className='editIcon'
//             />
//         </div>
//     </div>
//   ));
// }

// export default Todo;
