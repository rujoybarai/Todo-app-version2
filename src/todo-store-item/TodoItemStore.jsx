import { Children, createContext, useEffect } from "react";
import { useState ,useReducer} from 'react';
import React from 'react';

export const TodoItemStore = createContext([]);


const reducer=(currValue,action)=>{
let newTodos=currValue;
  if(action.type==="new_item"){
   newTodos = [...currValue, {showItem: action.payload.showItem, itemDate: action.payload.itemDate}];
  }
  if(action.type==="delete_item"){
    newTodos = currValue.filter((item, index) => index !== action.payload.deleteitem);
  }
  if(action.type==="update_item"){
     let savedList =[...currValue];
      savedList[action.payload.editItem] = { showItem: action.payload.showItem, itemDate: action.payload.itemDate };
      newTodos = savedList;
  }
  return newTodos;
};
const StoreDetails=JSON.parse(localStorage.getItem("Store")) || [];

const AppAllTodoStore =({children})=>{


    // const [todoList, setTodoList] = useState([]);
    const [todoList,dispatchTodoList]= useReducer(reducer,StoreDetails);
   const [editItem,setEditItem]= useState(null);

// Adding item to todo list:

// const onAdtodo= (showItem, itemDate) => {
//     let newItem = { showItem,  itemDate, };
//     setTodoList([...todoList, newItem]);

//     }

useEffect(()=>{
  localStorage.setItem("Store",JSON.stringify(todoList))
},[todoList])

// Add item todo list essay method:
const onAdtodo= (showItem, itemDate) => {

   let newItem ={
    type:"new_item",
    payload:{ showItem, itemDate }
   };
   dispatchTodoList(newItem);
   
   
    // setTodoList((currVal)=>[...currVal, { showItem,  itemDate }]);

    }


    // Deleting item from todo list:

   const onDeleteItem = (deleteitem) => {
      
      let deleteItem={
        type:"delete_item",
        payload:{deleteitem}

      }
      dispatchTodoList(deleteItem);
    }

    // Editing item from todo list:
    const onEditItem = (index) => {
      setEditItem(index);
    }
   
    // Saving edited item to todo list:
    const saveItem = (showItem, itemDate) => {
     
      let updateItem={
        type:"update_item",
        payload:{ showItem, itemDate, editItem }
      }
      dispatchTodoList(updateItem);
      //
      
      setEditItem(null);
    }

return(
    <TodoItemStore.Provider value={{
      todoList: todoList,
      addTodo: onAdtodo,
      deleteTodo: onDeleteItem,
      editTodo: onEditItem,
      saveTodo: saveItem,
      editIndex: editItem
    }}>
    {children}
    </TodoItemStore.Provider>
)


}

export default AppAllTodoStore;