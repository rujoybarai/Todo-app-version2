import React from 'react'
import { MdDelete } from "react-icons/md";


export default function Todoitem({todoList,onDeleteItem}) {
  
  

    
  return (
    <>
    
    <ul className='list-unstyled mt-4'>
     {todoList.map((item,index) =>( 
           <li className='d-flex justify-content-evenly align-items-center border p-2 mb-2 bg-white mt-3 rounded'  key={index}>
           <span className='fs-6 pl-5 flex-grow-1 ' >{item.showItem}</span>
            <span className='fs-6 pl-5 flex-grow-1' >{item.itemDate}</span>
           <button className='btn btn-danger' onClick={() => onDeleteItem(index)}><MdDelete /></button>
        </li>
        
        
     ))}
    </ul>
    
    </>
  )
}
