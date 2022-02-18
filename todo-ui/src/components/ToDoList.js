import React, { useEffect, useState } from 'react';
import '../bootstrap.css';
import './ToDoList.css';
import {useNavigate} from 'react-router-dom';
import moment from 'moment';
import ToDoService from '../resources/ToDoService';

function ToDoList() {
   const [todos, setTodos] = useState([]);
   const navigate = useNavigate();
   
   useEffect(() => {
      let isMounted = true;
      ToDoService.retrieveAllTodos().then(response => {
         if (isMounted) setTodos(response.data);
      })
      return () => { isMounted = false };
   },[todos]);

   let deleteClicked = (id) => {
      ToDoService.deleteTodo(id)
   };
   
   return (
   <div className="ToDoList">
      <div className="container-fluid">
         <table className="table table-dark table-striped table-hover">
            <thead>
               <tr>
                  <th scope="col">Description</th>
                  <th scope="col">Target Date</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
               </tr>
            </thead>
            <tbody>
               {todos.map(todo =>
                  <tr key={todo.id}>
                     <td className="align-middle">{todo.description}</td>
                     <td className="col-md-2 align-middle">{moment(todo.targetDate).format('MM-DD-YYYY')}</td>
                     <td className="col-md-2 align-middle">{todo.status}</td>
                     <td className="col-md-2 align-middle">
                        <button onClick={() => navigate(`/todos/update/${todo.id}`)} className="btn btn-primary">Update</button>
                        {" "}
                        <button onClick={() => deleteClicked(todo.id)} className="btn btn-danger">Delete</button>
                     </td>
                  </tr>
               )}
            </tbody>
         </table>
      </div>
      <button type="button" onClick={() => navigate('/todos/add')} className="btn btn-success btn-lg">Add To-Do</button>
   </div>
   );
}

export default ToDoList