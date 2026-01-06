import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Heading from './components/Heading';
import Todoheading from './components/Todoheading';
import Todoitem from './components/Todoitem';
import { useState } from 'react';
import { TodoItemStore } from './todo-store-item/TodoItemStore';

function App() {
   
  
    const [todoList, setTodoList] = useState([]);
   const [editItem,setEditItem]= useState(null);

// Adding item to todo list:

// const onAdtodo= (showItem, itemDate) => {
//     let newItem = { showItem,  itemDate, };
//     setTodoList([...todoList, newItem]);

//     }


// Add item todo list essay method:
const onAdtodo= (showItem, itemDate) => {
   
    setTodoList((currVal)=>[...currVal, { showItem,  itemDate }]);

    }


    // Deleting item from todo list:

   const onDeleteItem = (deleteitem) => {
      let updatedList = todoList.filter((item, index) => index !== deleteitem);
      setTodoList(updatedList);
    }

    // Editing item from todo list:
    const onEditItem = (index) => {
      setEditItem(index);
    }
   
    // Saving edited item to todo list:
    const saveItem = (showItem, itemDate) => {
      let savedList =[...todoList];
      savedList[editItem] = { showItem, itemDate };
      setTodoList (savedList);
      setEditItem(null);
    }


  return (
    <TodoItemStore.Provider value={{
      todoList: todoList,
      addTodo: onAdtodo,
      deleteTodo: onDeleteItem,
      editTodo: onEditItem,
      saveTodo: saveItem,
      editIndex: editItem
    }}>
    <div className='TodoApp container mt-5 border p-4 bg-light h-100 w-50'>
      <Heading />
      <Todoheading  />
      <Todoitem  />
    </div>
    </TodoItemStore.Provider>
  )
}

export default App
