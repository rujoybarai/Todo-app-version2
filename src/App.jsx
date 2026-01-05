import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Heading from './components/Heading';
import Todoheading from './components/Todoheading';
import Todoitem from './components/Todoitem';
import { useState } from 'react';

function App() {
   
  
    let [todoList, setTodoList] = useState([]);


  let onAdtodo= (showItem, itemDate) => {
    let newItem = { showItem,  itemDate, };
    setTodoList([...todoList, newItem]);

    }

    let onDeleteItem = (deleteitem) => {
      let updatedList = todoList.filter((item, index) => index !== deleteitem);
      setTodoList(updatedList);
    }


  return (
    <div className='TodoApp container mt-5 border p-4 bg-light h-100 w-50'>
      <Heading />
      <Todoheading onAdtodo={onAdtodo} />
      <Todoitem todoList={todoList} onDeleteItem={onDeleteItem} />
    </div>
  )
}

export default App
