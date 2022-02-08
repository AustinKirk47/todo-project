import '../bootstrap.css';
import './FormPage.css';
import ToDoForm from './ToDoForm'
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import ToDoService from '../resources/ToDoService';

function AddToDo() {
   const navigate = useNavigate();
   const handleSubmit = (description, targetDate, status) => {
      const todo = {
         description,
         targetDate,
         status
      };
      ToDoService.createTodo(todo);
      navigate('/todos');
   }

   useEffect(() => {
      document.title = "New To-do"
   });
   
   return (
      <div className="FormPage">
         <header className="FormPage-header">
            <h2 className="FormPage-title">Add a To-do</h2>
         </header>
         <ToDoForm handleSubmit={handleSubmit} />
      </div>
   );
}

export default AddToDo;