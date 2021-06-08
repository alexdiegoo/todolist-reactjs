import React, { useState } from 'react';
import './index.css';

import DeleteIcon from '@material-ui/icons/Delete';

function Task({ task: { name, id }, setTasks, tasks }) {
  const [isChecked, setIsChecked] = useState(false);

  function removeTask() {
    const newTasks = tasks.filter(task => {
      if (task.id !== id) return task 
    })

    setTasks(newTasks);
  }

  function handleChange() {
    setIsChecked(!isChecked);
  }
  
  return (
    <div className="task">
      <div className="task-info">
        <div className="checkbox">
          <input type="checkbox" onChange={handleChange} />
        </div>
        <p className={isChecked ? 'finished' : ''}>{name}</p>
      </div>
      <DeleteIcon 
        style={{cursor: 'pointer'}}
        onClick={removeTask}
      />
    </div>
  );
}

export default Task;
