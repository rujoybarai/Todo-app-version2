import React from 'react'
import { useContext } from 'react';
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { TodoItemStore } from '../todo-store-item/TodoItemStore';


export default function Todoitem() {
   const TodosObject = useContext(TodoItemStore);
       const todoList= TodosObject.todoList;
     
      const  deleteTodo= TodosObject.deleteTodo;
       const editItem= TodosObject.editTodo;
  

    
  return (
    <>
    
    <ul className='list-unstyled mt-4'>
     {todoList.map((item,index) =>( 
           <li className='d-flex justify-content-evenly align-items-center border p-2 mb-2 bg-white mt-3 rounded gap-3'  key={index}>
           <span className='fs-6 pl-5 flex-grow-1 ' >{item.showItem}</span>
            <span className='fs-6 pl-5 flex-grow-1' >{item.itemDate}</span>
           <button className='btn btn-danger ' onClick={() => deleteTodo(index)}><MdDelete /></button>
           <button className='btn btn-primary' onClick={() => editItem(index)}><FaRegEdit /></button>
        </li>
        
        
     ))}
    </ul>
    
    </>
  )
}
