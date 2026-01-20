import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


import Heading from './components/Heading';
import Todoheading from './components/Todoheading';
import Todoitem from './components/Todoitem';
import  AppAllTodoStore  from './todo-store-item/TodoItemStore';







function App() {
   
  
  return (
    <AppAllTodoStore>
    <div className='TodoApp container mt-5 border p-4 bg-light h-100 w-50 ' id='TodoApp'>
      <Heading />
      <Todoheading  />
      <Todoitem  />
    </div>
    </AppAllTodoStore>
  
  )
}

export default App
