import '../bootstrap.css';
import './FormPage.css';
import ToDoForm from './ToDoForm'
import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import ToDoService from '../resources/ToDoService';

function UpdateToDo() {
   let { id } = useParams();
   const [oldTodo, setOldTodo] = useState([]);
   const navigate = useNavigate();
   const handleSubmit = (description, targetDate, status) => {
      const todo = {
         id,
         description,
         targetDate,
         status
      };
      ToDoService.updateTodo(id, todo);
      navigate('/todos');
   };

   useEffect(() => {
      document.title = "Update To-Do"
      ToDoService.retrieveTodo(id).then(
         response => {
            setOldTodo(response.data)
         }
      )
   },[]);

   if(oldTodo.description) {
      return (
         <div className="FormPage">
            <header className="FormPage-header">
               <h2 className="FormPage-title">Update a To-do</h2>
            </header>
            <ToDoForm
               update = {true}
               description = {oldTodo.description}
               targetDate = {oldTodo.targetDate}
               status = {oldTodo.status} 
               handleSubmit={handleSubmit}
            />
         </div>
      );
   } else {
      return (
         <div className="FormPage">
            <header className="FormPage-header">
               <h2 className="FormPage-title">Update a To-do</h2>
            </header>
         </div>
      );
   }
}

export default UpdateToDo;