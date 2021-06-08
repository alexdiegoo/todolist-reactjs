import React, { useState } from 'react';

import InputTask from '../components/InputTask';
import Task from '../components/Task';

function TodoList() {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      name: "Estudar Teoria Musical"
    },
    {
      id: 1,
      name: "Fazer Almoço as 12h"
    }
  ]);

  function setState(tasks) {
    setTasks(tasks)
  }

  return (
    <div className="todolist">
      <InputTask handleSubmit={setState} tasks={tasks}/>
      <div className="tasks" style={{marginTop: 20}}>
        {
          tasks.map(task => <Task 
              task={task}
              tasks={tasks} 
              setTasks={setState} 
              key={task.id} />)
        }
      </div>
    </div>
  );
}

export default TodoList;
