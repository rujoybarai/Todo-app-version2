import React, { useEffect } from 'react'
import { useState } from 'react';
import { IoMdAddCircle } from "react-icons/io";
import { IoSave } from "react-icons/io5";

export default function Todoheading({onAdtodo,editItem,saveItem,todoList}) {
      let [showItem, setShowItem] = useState();
    let [itemDate, setItemDate] = useState();

    useEffect(() => {
      if (editItem !== null) {
        
        setShowItem(todoList[editItem].showItem);
        setItemDate(todoList[editItem].itemDate);
      }
    }, [editItem]);


    let handleAddItem = () => {
        if(!showItem || !itemDate){
           
            return;
        }
      if(editItem !== null){
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
      <button className='btn btn-primary' onClick={handleAddItem}>{editItem !== null ? <IoSave /> : <IoMdAddCircle />}</button>
    </div>
  )
}
