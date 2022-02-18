import '../bootstrap.css';
import './ToDoApp.css';
import {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

function Welcome() {
   const navigate = useNavigate();

   useEffect(() => {
      document.title = "Welcome"
   });

   let startClicked = () => {
      navigate('/todos')
   };

   return (
   <div className="ToDoApp">
      <header className="ToDoApp-header">
         <h2 className="ToDoApp-title">Welcome</h2>
      </header>
      <br />
      <button className="btn btn-lg btn-success" onClick={startClicked}>Start</button>
   </div>
   );
}

export default Welcome;