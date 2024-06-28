import React, { useState } from 'react';
import './TodoForm.css';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add todo here...."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className='Add-todo-input'
      />
      <button className='Add-todo-btn' type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;














































































// import React , { useState }from 'react'

// const Todoform = () => {
//     const [input,inputvalue] = useState("")

//     const handlechange = e => {
//         inputvalue(e.target.value);
//     }

//     const handleSubmit = e => {
//         e.preventDefault();

        // props.onSubmit({
        // id:Math.floor(Math.random() * 10000),
        // text: input
        // });

    //     inputvalue(" ");
    // }

    // console.log(inputvalue);
//   return (
//     <>
//     <form  onSubmit={handleSubmit}>
//     <input 
//     type='text'
//     placeholder='Write todo'
//     value={input}
//     name='text'
//     onChange={handlechange}
//     />
//     <button>Add todo</button>
//     </form> 
//     </>
//   )
// }

// export default Todoform;
