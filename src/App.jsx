import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Heading from './components/Heading';
import Todoheading from './components/Todoheading';
import Todoitem from './components/Todoitem';
import { useState } from 'react';

function App() {
   
  
    const [todoList, setTodoList] = useState([]);
   const [editItem,setEditItem]= useState(null);


const onAdtodo= (showItem, itemDate) => {
    let newItem = { showItem,  itemDate, };
    setTodoList([...todoList, newItem]);

    }

   const onDeleteItem = (deleteitem) => {
      let updatedList = todoList.filter((item, index) => index !== deleteitem);
      setTodoList(updatedList);
    }

    const onEditItem = (index) => {
      setEditItem(index);
    }
   
    const saveItem = (showItem, itemDate) => {
      let savedList =[...todoList];
      savedList[editItem] = { showItem, itemDate };
      setTodoList (savedList);
      setEditItem(null);
    }


  return (
    <div className='TodoApp container mt-5 border p-4 bg-light h-100 w-50'>
      <Heading />
      <Todoheading onAdtodo={onAdtodo} editItem={editItem} saveItem={saveItem} todoList={todoList} />
      <Todoitem todoList={todoList} onDeleteItem={onDeleteItem} onEditItem={onEditItem} />
    </div>
  )
}

export default App
