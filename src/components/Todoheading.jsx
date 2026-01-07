import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { IoMdAddCircle } from "react-icons/io";
import { IoSave } from "react-icons/io5";
import { TodoItemStore } from '../todo-store-item/TodoItemStore';



export default function Todoheading() {
  const TodosObject = useContext(TodoItemStore);
    const todoList= TodosObject.todoList;
    const onAdtodo= TodosObject.addTodo;
    const saveItem= TodosObject.saveTodo;
   
    const editIndex= TodosObject.editIndex;


      let [showItem, setShowItem] = useState();
    let [itemDate, setItemDate] = useState();
     
    

    useEffect(() => {
      if (editIndex !== null ) {
        
        setShowItem(todoList[editIndex].showItem);
        setItemDate(todoList[editIndex].itemDate);
      }
    }, [editIndex]);


    let handleAddItem = () => {
        if(!showItem || !itemDate ){
           
            return;
        }
      if(editIndex !== null){
        saveItem(showItem, itemDate);
       
      }else{

     onAdtodo(showItem, itemDate);

       
      }
       setShowItem('');
        setItemDate('');
       
    }
  return (
    <div className='d-flex gap-3'>
      <input type="text" value={showItem} className='form-control' onChange={(e) => setShowItem(e.target.value)}/> 
      <div>
        <input type="date" value={itemDate} className='form-control' onChange={(e) => setItemDate(e.target.value)} />
      </div>
      <button className='btn btn-primary' onClick={handleAddItem}>{editIndex !== null ? <IoSave /> : <IoMdAddCircle />}</button>
    </div>
  )
}
