'use client';
import React, {  useState } from 'react'
import Container from './Container'
import { useDispatch, useSelector } from 'react-redux';
import { Add_Todo } from '@/reduxStore/todoSlice';

const TodoForms = () => {
  
  const {todosValue} = useSelector ((state) => state.todo);
  console.log(todosValue)
  const dispatch =useDispatch ();
  const [inputText,setInpuText] = useState ('');
  const todoFunction = (e) =>{
    setInpuText(e.target.value);
  };
  const saveTodo = (e) => {
    e.preventDefault();
  const newTodo={
      id:Math.random(),
      text:inputText,
   };
   dispatch (Add_Todo(newTodo))
    setInpuText('');
    

  };
  return (
  
      <div className='flex items-center justify-center flex-col'>
            <h1 className='border boorder-bottom-1 text-black mb-3'>
                This is a todo application

            </h1>
    <div className='flex gap-x-4'>
      <input className='border border-black'
      type='text ' placeholder='kichu likho' 
      onChange={todoFunction}
      value={inputText}
      />
      <button onClick={saveTodo}>
        add 
      </button>
    </div>
    <div>
       {
        todosValue.length > 0 && todosValue.map((item)=>(
          <p key={item.id}>{item?.text}</p>
        ))
       }
      </div>
    </div>
 
  )
}

export default TodoForms