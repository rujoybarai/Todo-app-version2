import React from 'react'
import { useState } from 'react';
import { IoMdAddCircle } from "react-icons/io";

export default function Todoheading({onAdtodo}) {
      let [showItem, setShowItem] = useState();
    let [itemDate, setItemDate] = useState();

  
    
    let handleAddItem = () => {
        if(!showItem || !itemDate){
           
            return;
        }

        onAdtodo(showItem, itemDate);

        setShowItem('');
        setItemDate('');
    }
  return (
    <div className='d-flex gap-3'>
      <input type="text" value={showItem} className='form-control' onChange={(e) => setShowItem(e.target.value)}/> 
      <div>
        <input type="date" value={itemDate} className='form-control' onChange={(e) => setItemDate(e.target.value)} />
      </div>
      <button className='btn btn-primary' onClick={handleAddItem}><IoMdAddCircle /></button>
    </div>
  )
}
