import '../bootstrap.css';
import './ToDoApp.css';
import ToDoList from './ToDoList';
import {useEffect} from 'react';

function ToDoApp() {

   useEffect(() => {
      document.title = "To-do List"
   },[]);

   return (
   <div className="ToDoApp">
      <header className="ToDoApp-header">
         <h2 className="ToDoApp-title">To-do List</h2>
      </header>
      <ToDoList />
   </div>
   );
}

export default ToDoApp;