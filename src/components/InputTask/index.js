import React, { useState, useEffect } from 'react';
import './index.css';

import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';

function InputTask({ handleSubmit, tasks }) {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleKeyPress(e) {
    if (e.charCode !== 13) {
      return;
    }

    handleSubmit([
      ...tasks, 
      {
        id: tasks.length + 1,
        name: value
      }
    ]);

    setValue('');
  }

  return (
    <div className="input-task">
      <FormatAlignLeftIcon />
      <input
        value={value} 
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        type="text" 
        placeholder="Add task..." />
    </div>
  );
}

export default InputTask;
