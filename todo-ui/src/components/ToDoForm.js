import '../bootstrap.css';
import {useEffect, useState} from 'react';

const ToDoForm = params => {
   const [description, setDescription] = useState(params.update === true ? params.description : 'Add a description');
   const [status, setStatus] = useState(params.update === true ? params.status : 'Not Started');
   const defaultValue = new Date().toISOString().split('T')[0];
   const oldValue = params.targetDate.toISOString().split('T')[0];
   const [targetDate, setTargetDate] = useState(params.update === true ? oldValue : defaultValue);
   
   const handleSubmit = (form, e) => {
      e.preventDefault();
      params.handleSubmit(description, targetDate, status);
   }
   
   return (
      <form name="form" onSubmit={() => handleSubmit}>
         <div className="form-group">
            <label htmlFor="description" className="col-sm-2 control-label">Description</label>
            <div className="col-sm-6">
               <input
                  type="text"
                  className="form-control"
                  name="description"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
               />
            </div>
         </div>
         <div className="form-group">
            <label htmlFor="targetDate" className="col-sm-2 control-label">Target Date</label>
            <div className="col-sm-2">
               <input
                  type="date"
                  className="form-control"
                  name="targetDate"
                  value={targetDate}
                  onChange={e => setTargetDate(e.target.value)}
               />
            </div>
         </div>
         <div className="form-group">
            <label htmlFor="status" className="col-sm-2 control-label">Status</label>
            <div className="col-sm-2">
               <div className="select">
                  <select
                     className="form-control"
                     name="status"
                     value={status}
                     onChange={e => setStatus(e.target.value)}
                  >
                     <option value="Not Started">Not Started</option>
                     <option value="Incomplete">Incomplete</option>
                     <option value="Complete">Complete</option>
                  </select>
               </div>
            </div>
         </div>
         <div className="form-group">
            <div className="col-sm-2">
               <button type="submit" className="btn btn-success">Submit</button>
            </div>
         </div>
      </form>
   );
}

export default ToDoForm;