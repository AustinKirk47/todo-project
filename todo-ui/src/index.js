import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import ToDoApp from './ToDoApp';
import AddToDo from './components/AddToDo';
import UpdateToDo from './components/UpdateToDo';

export default function App() {
   return (
     <BrowserRouter>
       <Routes>
         <Route path="/todos">
           <Route index element={<ToDoApp />} />
           <Route path="/todos/add" element={<AddToDo />} />
           <Route path="/todos/update/:id" element={<UpdateToDo />} />
         </Route>
       </Routes>
     </BrowserRouter>
   );
}
 
ReactDOM.render(<App />, document.getElementById("root"));

/*
ReactDOM.render(
  <React.StrictMode>
    <ToDoApp />
  </React.StrictMode>,
  document.getElementById('root')
);
*/